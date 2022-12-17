package game

import (
	"math/rand"
	"time"
)

func GetDoll() int32 {
	max := int32(6)
	min := int32(1)
	rand.Seed(time.Now().UnixNano())
	return rand.Int31n(max-min+1) + min
}

func GetRandIndex(length int32) int32 {
	min := int32(0)
	max := length - 1
	rand.Seed(time.Now().UnixNano())
	return rand.Int31n(max-min+1) + min
}
