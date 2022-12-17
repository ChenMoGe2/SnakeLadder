# 蛇梯游戏

通信协议基于websocket，客户端和服务端所有的数据交互基于protobuf进行封装。<br/>

1.父数据包

所有数据的传递都遵照父数据包的格式

<table>
    <tr>
        <td>参数名称</td>
        <td>参数类型</td>
        <td>参数说明</td>
    </tr>
    <tr>
        <td>sessionId</td>
        <td>int32</td>
        <td>会话ID，用来标识用户</td>
    </tr>
    <tr>
        <td>crc32</td>
        <td>int32</td>
        <td>当前数据的类型</td>
    </tr>
    <tr>
        <td>reqCrc32</td>
        <td>int32</td>
        <td>请求数据的类型</td>
    </tr>
    <tr>
        <td>object</td>
        <td>bytes</td>
        <td>数据报文的具体内容</td>
    </tr>
</table>

2.子数据包

SignIn(CRC32:10001)

<table>
    <tr>
        <td>参数名称</td>
        <td>参数类型</td>
        <td>参数说明</td>
    </tr>
    <tr>
        <td>username</td>
        <td>string</td>
        <td>用户名</td>
    </tr>
</table>

Match(CRC32:10002)

<table>
    <tr>
        <td>参数名称</td>
        <td>参数类型</td>
        <td>参数说明</td>
    </tr>
    <tr>
        <td>num</td>
        <td>int32</td>
        <td>匹配人数（目前只有2）</td>
    </tr>
</table>

Doll(CRC32:10003)

<table>
    <tr>
        <td>参数名称</td>
        <td>参数类型</td>
        <td>参数说明</td>
    </tr>
</table>

User(CRC32:20001)

<table>
    <tr>
        <td>参数名称</td>
        <td>参数类型</td>
        <td>参数说明</td>
    </tr>
    <tr>
        <td>id</td>
        <td>int32</td>
        <td>用户ID</td>
    </tr>
    <tr>
        <td>username</td>
        <td>string</td>
        <td>用户名</td>
    </tr>
    <tr>
        <td>score</td>
        <td>int32</td>
        <td>分数</td>
    </tr>
</table>

Bool(CRC32:20002)

<table>
    <tr>
        <td>参数名称</td>
        <td>参数类型</td>
        <td>参数说明</td>
    </tr>
    <tr>
        <td>value</td>
        <td>bool</td>
        <td>布尔值</td>
    </tr>
</table>

MatchResult(CRC32:20003)

<table>
    <tr>
        <td>参数名称</td>
        <td>参数类型</td>
        <td>参数说明</td>
    </tr>
    <tr>
        <td>id</td>
        <td>int32</td>
        <td>游戏ID</td>
    </tr>
    <tr>
        <td>users</td>
        <td>repeated User</td>
        <td>匹配到的所有用户</td>
    </tr>
    <tr>
        <td>map</td>
        <td>string</td>
        <td>地图中蛇梯的位置</td>
    </tr>
    <tr>
        <td>curUserId</td>
        <td>int32</td>
        <td>第一个先走的用户ID</td>
    </tr>
</table>

DollResult(CRC32:20004)

<table>
    <tr>
        <td>参数名称</td>
        <td>参数类型</td>
        <td>参数说明</td>
    </tr>
    <tr>
        <td>num</td>
        <td>int32</td>
        <td>骰子点数</td>
    </tr>
    <tr>
        <td>curPos</td>
        <td>int32</td>
        <td>当前位置</td>
    </tr>
    <tr>
        <td>curPlayer</td>
        <td>int32</td>
        <td>当前玩家ID</td>
    </tr>
    <tr>
        <td>nextPlayer</td>
        <td>int32</td>
        <td>下一个回合玩家ID</td>
    </tr>
</table>

3.数据表

用户表

CREATE TABLE `user` (<br/>
`id` int NOT NULL AUTO_INCREMENT,<br/>
`username` varchar(32) COLLATE utf8mb4_bin NOT NULL,<br/>
`score` int NOT NULL,<br/>
`create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,<br/>
PRIMARY KEY (`id`),<br/>
UNIQUE KEY `unique_idx` (`username`) USING BTREE<br/>
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;<br/>

游戏表

CREATE TABLE `game` (<br/>
`id` int NOT NULL AUTO_INCREMENT,<br/>
`map` varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '[]',<br/>
`process` varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '[]',<br/>
`cur_user_id` int NOT NULL,<br/>
`victory` int NOT NULL,<br/>
`create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,<br/>
PRIMARY KEY (`id`)<br/>
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;<br/>

游戏用户关联表

CREATE TABLE `game_user` (<br/>
`id` int NOT NULL AUTO_INCREMENT,<br/>
`game_id` int NOT NULL,<br/>
`user_id` int NOT NULL,<br/>
`cur_pos` int NOT NULL,<br/>
`create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,<br/>
PRIMARY KEY (`id`)<br/>
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;<br/>