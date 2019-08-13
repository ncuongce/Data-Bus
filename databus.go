package main

import (
	//	"fmt"
	"encoding/json"
	"io/ioutil"
	"os"
	"time"
)

type MessageStruct struct {
	Id        int    `json:"id"`
	Data      string `json:"data"`
	Attention bool   `json:"attention"`
	Channel   string `json:"channel"`
	Date      string `json:"date"`
}

type ChannelStruct struct {
	Id       int    `json:"id"`
	Protocol string `json:"protocol"`
	Number   string `json:"number"`
}

type Database struct {
	Messages []MessageStruct `json:"messages"`
	Channels []ChannelStruct `json:"channels"`
}

var Db Database

func LoadData() (err error) {
	cur, err := os.Open("db.json")
	if err != nil {
		return err
	}
	defer cur.Close()
	byteValue, _ := ioutil.ReadAll(cur)
	json.Unmarshal(byteValue, &Db)

	return
}

func SaveData() (err error) {
	byteValue, err := json.Marshal(Db)
	if err != nil {
		return err
	}
	if err := ioutil.WriteFile("db.json", byteValue, 0644); err != nil {
		return err
	}

	return
}

func init() {
	LoadData()
}

func main() {
	msg := MessageStruct{
		0,
		"0xffffffff",
		true,
		"A429 #1",
		""}
	id := 0
	if len(Db.Messages) != 0 {
		id = Db.Messages[len(Db.Messages)-1].Id + 1
	}
	for {
		msg.Id = id
		msg.Date = time.Now().String()
		Db.Messages = append(Db.Messages, msg)
		SaveData()
		id += 1
		time.Sleep(100 * time.Millisecond)
	}
}
