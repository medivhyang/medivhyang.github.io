title: Go 语言自定义 SQL 类型
date: 2021-03-10 17:15:00
tags:
  - Go
---

Go 语言 `datebase/sql` 标准库除了处理基本数据类型，还可以处理自定义数据类型。

<!-- more -->

## 如何自定义 SQL 数据类型

实现 `driver.Valuer` 和 `sql.Scanner` 接口。

`driver.Valuer` 接口定义：

```go
// Valuer is the interface providing the Value method.
//
// Types implementing Valuer interface are able to convert
// themselves to a driver Value.
type Valuer interface {
	// Value returns a driver Value.
	// Value must not panic.
	Value() (Value, error)
}
```

`sql.Scanner` 接口定义：

```go
type Scanner interface {
	// Scan assigns a value from a database driver.
	//
	// The src value will be of one of the following types:
	//
	//    int64
	//    float64
	//    bool
	//    []byte
	//    string
	//    time.Time
	//    nil - for NULL values
	//
	// An error should be returned if the value cannot be stored
	// without loss of information.
	//
	// Reference types such as []byte are only valid until the next call to Scan
	// and should not be retained. Their underlying memory is owned by the driver.
	// If retention is necessary, copy their values before the next call to Scan.
	Scan(src interface{}) error
}
```

## 例子：JSON 字符串数组类型

```go
import (
	"database/sql/driver"
	"encoding/json"
)

// SQLJSONStringArray is JSON string array in sql
type SQLJSONStringArray []string

// Value implements driver.Valuer
func (a SQLJSONStringArray) Value() (driver.Value, error) {
	if a == nil {
		return []byte("[]"), nil
	}
	return json.Marshal(a)
}

// Scan implements sql.Scanner
func (a *SQLJSONStringArray) Scan(src interface{}) error {
	if v, ok := src.([]byte); ok {
		return json.Unmarshal(v, a)
	}
	return nil
}
```

使用示例：

```go
db, err := sql.Open("sqlite3", "./data.db")
if err != nil {
    panic(err)
}
if _, err := db.Exec("create table if not exists foo(names json not null default '[]')"); err != nil {
    panic(err)
}
names := SQLJSONStringArray{"foo", "bar", "baz"}
if _, err := db.Exec("delete from foo; insert into foo(names) values(?)", names); err != nil {
    panic(err)
}
var result SQLJSONStringArray
if err := db.QueryRow("select * from foo").Scan(&result); err != nil {
    panic(err)
}
fmt.Println("expect:", names)
fmt.Println("actual:", result)
```

示例结果：

```text
expect: [foo bar baz]
actual: [foo bar baz]
```

> 📌 最佳实践
> 
> 实现 `driver.Valuer` 接口时，方法接受者不带指针；实现 `sql.Scanner` 接口时，方法接受者带指针。

## 小结

- 自定义 SQL 数据类型只需实现 `driver.Valuer` 和 `sql.Scanner` 接口。
- 最佳实践：实现 `driver.Valuer` 接口时，方法接受者不带指针；实现 `sql.Scanner` 接口时，方法接受者带指针。