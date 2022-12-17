package game

import (
	"encoding/json"
	"math/rand"
	"time"
)

func GetRandomMap() string {
	result := make([]map[string]int32, 6)
	for i := 0; i < 6; i++ {
		numPair := make(map[string]int32)
		n1, n2 := getRandomPair(1, 100)
		numPair["n1"] = n1
		numPair["n2"] = n2
		result[i] = numPair
	}
	resultJson, _ := json.Marshal(result)
	return string(resultJson)
}

func getRandomPair(min, max int32) (int32, int32) {
	rand.Seed(time.Now().UnixNano())
	num1 := rand.Int31n(max-min+1) + min
	var num2 int32
	for {
		rand.Seed(time.Now().UnixNano())
		num2 = rand.Int31n(max-min+1) + min
		if num2 != num1 {
			break
		}
	}
	return num1, num2
}
