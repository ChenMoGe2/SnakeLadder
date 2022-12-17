package game

import (
	"fmt"
	"testing"
)

func TestGetRandomMap(t *testing.T) {
	randomMap := GetRandomMap()
	fmt.Println(randomMap)
}
