/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.slproto = (function() {

    /**
     * Namespace slproto.
     * @exports slproto
     * @namespace
     */
    var slproto = {};

    slproto.SLObject = (function() {

        /**
         * Properties of a SLObject.
         * @memberof slproto
         * @interface ISLObject
         * @property {number|null} [sessionId] SLObject sessionId
         * @property {number|null} [crc32] SLObject crc32
         * @property {number|null} [reqCrc32] SLObject reqCrc32
         * @property {Uint8Array|null} [object] SLObject object
         */

        /**
         * Constructs a new SLObject.
         * @memberof slproto
         * @classdesc Represents a SLObject.
         * @implements ISLObject
         * @constructor
         * @param {slproto.ISLObject=} [properties] Properties to set
         */
        function SLObject(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SLObject sessionId.
         * @member {number} sessionId
         * @memberof slproto.SLObject
         * @instance
         */
        SLObject.prototype.sessionId = 0;

        /**
         * SLObject crc32.
         * @member {number} crc32
         * @memberof slproto.SLObject
         * @instance
         */
        SLObject.prototype.crc32 = 0;

        /**
         * SLObject reqCrc32.
         * @member {number} reqCrc32
         * @memberof slproto.SLObject
         * @instance
         */
        SLObject.prototype.reqCrc32 = 0;

        /**
         * SLObject object.
         * @member {Uint8Array} object
         * @memberof slproto.SLObject
         * @instance
         */
        SLObject.prototype.object = $util.newBuffer([]);

        /**
         * Creates a new SLObject instance using the specified properties.
         * @function create
         * @memberof slproto.SLObject
         * @static
         * @param {slproto.ISLObject=} [properties] Properties to set
         * @returns {slproto.SLObject} SLObject instance
         */
        SLObject.create = function create(properties) {
            return new SLObject(properties);
        };

        /**
         * Encodes the specified SLObject message. Does not implicitly {@link slproto.SLObject.verify|verify} messages.
         * @function encode
         * @memberof slproto.SLObject
         * @static
         * @param {slproto.ISLObject} message SLObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SLObject.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sessionId);
            if (message.crc32 != null && message.hasOwnProperty("crc32"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.crc32);
            if (message.reqCrc32 != null && message.hasOwnProperty("reqCrc32"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.reqCrc32);
            if (message.object != null && message.hasOwnProperty("object"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.object);
            return writer;
        };

        /**
         * Encodes the specified SLObject message, length delimited. Does not implicitly {@link slproto.SLObject.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.SLObject
         * @static
         * @param {slproto.ISLObject} message SLObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SLObject.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SLObject message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.SLObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.SLObject} SLObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SLObject.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.SLObject();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.int32();
                    break;
                case 2:
                    message.crc32 = reader.int32();
                    break;
                case 3:
                    message.reqCrc32 = reader.int32();
                    break;
                case 4:
                    message.object = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SLObject message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.SLObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.SLObject} SLObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SLObject.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SLObject message.
         * @function verify
         * @memberof slproto.SLObject
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SLObject.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId))
                    return "sessionId: integer expected";
            if (message.crc32 != null && message.hasOwnProperty("crc32"))
                if (!$util.isInteger(message.crc32))
                    return "crc32: integer expected";
            if (message.reqCrc32 != null && message.hasOwnProperty("reqCrc32"))
                if (!$util.isInteger(message.reqCrc32))
                    return "reqCrc32: integer expected";
            if (message.object != null && message.hasOwnProperty("object"))
                if (!(message.object && typeof message.object.length === "number" || $util.isString(message.object)))
                    return "object: buffer expected";
            return null;
        };

        /**
         * Creates a SLObject message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.SLObject
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.SLObject} SLObject
         */
        SLObject.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.SLObject)
                return object;
            var message = new $root.slproto.SLObject();
            if (object.sessionId != null)
                message.sessionId = object.sessionId | 0;
            if (object.crc32 != null)
                message.crc32 = object.crc32 | 0;
            if (object.reqCrc32 != null)
                message.reqCrc32 = object.reqCrc32 | 0;
            if (object.object != null)
                if (typeof object.object === "string")
                    $util.base64.decode(object.object, message.object = $util.newBuffer($util.base64.length(object.object)), 0);
                else if (object.object.length)
                    message.object = object.object;
            return message;
        };

        /**
         * Creates a plain object from a SLObject message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.SLObject
         * @static
         * @param {slproto.SLObject} message SLObject
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SLObject.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sessionId = 0;
                object.crc32 = 0;
                object.reqCrc32 = 0;
                if (options.bytes === String)
                    object.object = "";
                else {
                    object.object = [];
                    if (options.bytes !== Array)
                        object.object = $util.newBuffer(object.object);
                }
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.crc32 != null && message.hasOwnProperty("crc32"))
                object.crc32 = message.crc32;
            if (message.reqCrc32 != null && message.hasOwnProperty("reqCrc32"))
                object.reqCrc32 = message.reqCrc32;
            if (message.object != null && message.hasOwnProperty("object"))
                object.object = options.bytes === String ? $util.base64.encode(message.object, 0, message.object.length) : options.bytes === Array ? Array.prototype.slice.call(message.object) : message.object;
            return object;
        };

        /**
         * Converts this SLObject to JSON.
         * @function toJSON
         * @memberof slproto.SLObject
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SLObject.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SLObject;
    })();

    slproto.MatchResult = (function() {

        /**
         * Properties of a MatchResult.
         * @memberof slproto
         * @interface IMatchResult
         * @property {number|null} [id] MatchResult id
         * @property {Array.<slproto.IUser>|null} [users] MatchResult users
         * @property {string|null} [map] MatchResult map
         * @property {number|null} [curUserId] MatchResult curUserId
         */

        /**
         * Constructs a new MatchResult.
         * @memberof slproto
         * @classdesc Represents a MatchResult.
         * @implements IMatchResult
         * @constructor
         * @param {slproto.IMatchResult=} [properties] Properties to set
         */
        function MatchResult(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchResult id.
         * @member {number} id
         * @memberof slproto.MatchResult
         * @instance
         */
        MatchResult.prototype.id = 0;

        /**
         * MatchResult users.
         * @member {Array.<slproto.IUser>} users
         * @memberof slproto.MatchResult
         * @instance
         */
        MatchResult.prototype.users = $util.emptyArray;

        /**
         * MatchResult map.
         * @member {string} map
         * @memberof slproto.MatchResult
         * @instance
         */
        MatchResult.prototype.map = "";

        /**
         * MatchResult curUserId.
         * @member {number} curUserId
         * @memberof slproto.MatchResult
         * @instance
         */
        MatchResult.prototype.curUserId = 0;

        /**
         * Creates a new MatchResult instance using the specified properties.
         * @function create
         * @memberof slproto.MatchResult
         * @static
         * @param {slproto.IMatchResult=} [properties] Properties to set
         * @returns {slproto.MatchResult} MatchResult instance
         */
        MatchResult.create = function create(properties) {
            return new MatchResult(properties);
        };

        /**
         * Encodes the specified MatchResult message. Does not implicitly {@link slproto.MatchResult.verify|verify} messages.
         * @function encode
         * @memberof slproto.MatchResult
         * @static
         * @param {slproto.IMatchResult} message MatchResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.slproto.User.encode(message.users[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.map != null && message.hasOwnProperty("map"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.map);
            if (message.curUserId != null && message.hasOwnProperty("curUserId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.curUserId);
            return writer;
        };

        /**
         * Encodes the specified MatchResult message, length delimited. Does not implicitly {@link slproto.MatchResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.MatchResult
         * @static
         * @param {slproto.IMatchResult} message MatchResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchResult message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.MatchResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.MatchResult} MatchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.MatchResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.slproto.User.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.map = reader.string();
                    break;
                case 4:
                    message.curUserId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.MatchResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.MatchResult} MatchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchResult message.
         * @function verify
         * @memberof slproto.MatchResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.slproto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            if (message.map != null && message.hasOwnProperty("map"))
                if (!$util.isString(message.map))
                    return "map: string expected";
            if (message.curUserId != null && message.hasOwnProperty("curUserId"))
                if (!$util.isInteger(message.curUserId))
                    return "curUserId: integer expected";
            return null;
        };

        /**
         * Creates a MatchResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.MatchResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.MatchResult} MatchResult
         */
        MatchResult.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.MatchResult)
                return object;
            var message = new $root.slproto.MatchResult();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".slproto.MatchResult.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".slproto.MatchResult.users: object expected");
                    message.users[i] = $root.slproto.User.fromObject(object.users[i]);
                }
            }
            if (object.map != null)
                message.map = String(object.map);
            if (object.curUserId != null)
                message.curUserId = object.curUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.MatchResult
         * @static
         * @param {slproto.MatchResult} message MatchResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.id = 0;
                object.map = "";
                object.curUserId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.slproto.User.toObject(message.users[j], options);
            }
            if (message.map != null && message.hasOwnProperty("map"))
                object.map = message.map;
            if (message.curUserId != null && message.hasOwnProperty("curUserId"))
                object.curUserId = message.curUserId;
            return object;
        };

        /**
         * Converts this MatchResult to JSON.
         * @function toJSON
         * @memberof slproto.MatchResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchResult;
    })();

    slproto.Bool = (function() {

        /**
         * Properties of a Bool.
         * @memberof slproto
         * @interface IBool
         * @property {boolean|null} [value] Bool value
         */

        /**
         * Constructs a new Bool.
         * @memberof slproto
         * @classdesc Represents a Bool.
         * @implements IBool
         * @constructor
         * @param {slproto.IBool=} [properties] Properties to set
         */
        function Bool(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bool value.
         * @member {boolean} value
         * @memberof slproto.Bool
         * @instance
         */
        Bool.prototype.value = false;

        /**
         * Creates a new Bool instance using the specified properties.
         * @function create
         * @memberof slproto.Bool
         * @static
         * @param {slproto.IBool=} [properties] Properties to set
         * @returns {slproto.Bool} Bool instance
         */
        Bool.create = function create(properties) {
            return new Bool(properties);
        };

        /**
         * Encodes the specified Bool message. Does not implicitly {@link slproto.Bool.verify|verify} messages.
         * @function encode
         * @memberof slproto.Bool
         * @static
         * @param {slproto.IBool} message Bool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bool.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
            return writer;
        };

        /**
         * Encodes the specified Bool message, length delimited. Does not implicitly {@link slproto.Bool.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.Bool
         * @static
         * @param {slproto.IBool} message Bool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bool.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bool message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.Bool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.Bool} Bool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bool.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.Bool();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bool message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.Bool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.Bool} Bool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bool.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bool message.
         * @function verify
         * @memberof slproto.Bool
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bool.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "boolean")
                    return "value: boolean expected";
            return null;
        };

        /**
         * Creates a Bool message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.Bool
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.Bool} Bool
         */
        Bool.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.Bool)
                return object;
            var message = new $root.slproto.Bool();
            if (object.value != null)
                message.value = Boolean(object.value);
            return message;
        };

        /**
         * Creates a plain object from a Bool message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.Bool
         * @static
         * @param {slproto.Bool} message Bool
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bool.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = false;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Bool to JSON.
         * @function toJSON
         * @memberof slproto.Bool
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bool.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Bool;
    })();

    slproto.User = (function() {

        /**
         * Properties of a User.
         * @memberof slproto
         * @interface IUser
         * @property {number|null} [id] User id
         * @property {string|null} [username] User username
         * @property {number|null} [score] User score
         */

        /**
         * Constructs a new User.
         * @memberof slproto
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {slproto.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {number} id
         * @memberof slproto.User
         * @instance
         */
        User.prototype.id = 0;

        /**
         * User username.
         * @member {string} username
         * @memberof slproto.User
         * @instance
         */
        User.prototype.username = "";

        /**
         * User score.
         * @member {number} score
         * @memberof slproto.User
         * @instance
         */
        User.prototype.score = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof slproto.User
         * @static
         * @param {slproto.IUser=} [properties] Properties to set
         * @returns {slproto.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link slproto.User.verify|verify} messages.
         * @function encode
         * @memberof slproto.User
         * @static
         * @param {slproto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link slproto.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.User
         * @static
         * @param {slproto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof slproto.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.User)
                return object;
            var message = new $root.slproto.User();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.score != null)
                message.score = object.score | 0;
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.User
         * @static
         * @param {slproto.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.username = "";
                object.score = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof slproto.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    slproto.DollResult = (function() {

        /**
         * Properties of a DollResult.
         * @memberof slproto
         * @interface IDollResult
         * @property {number|null} [num] DollResult num
         * @property {number|null} [curPos] DollResult curPos
         * @property {number|null} [curPlayer] DollResult curPlayer
         * @property {number|null} [nextPlayer] DollResult nextPlayer
         */

        /**
         * Constructs a new DollResult.
         * @memberof slproto
         * @classdesc Represents a DollResult.
         * @implements IDollResult
         * @constructor
         * @param {slproto.IDollResult=} [properties] Properties to set
         */
        function DollResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DollResult num.
         * @member {number} num
         * @memberof slproto.DollResult
         * @instance
         */
        DollResult.prototype.num = 0;

        /**
         * DollResult curPos.
         * @member {number} curPos
         * @memberof slproto.DollResult
         * @instance
         */
        DollResult.prototype.curPos = 0;

        /**
         * DollResult curPlayer.
         * @member {number} curPlayer
         * @memberof slproto.DollResult
         * @instance
         */
        DollResult.prototype.curPlayer = 0;

        /**
         * DollResult nextPlayer.
         * @member {number} nextPlayer
         * @memberof slproto.DollResult
         * @instance
         */
        DollResult.prototype.nextPlayer = 0;

        /**
         * Creates a new DollResult instance using the specified properties.
         * @function create
         * @memberof slproto.DollResult
         * @static
         * @param {slproto.IDollResult=} [properties] Properties to set
         * @returns {slproto.DollResult} DollResult instance
         */
        DollResult.create = function create(properties) {
            return new DollResult(properties);
        };

        /**
         * Encodes the specified DollResult message. Does not implicitly {@link slproto.DollResult.verify|verify} messages.
         * @function encode
         * @memberof slproto.DollResult
         * @static
         * @param {slproto.IDollResult} message DollResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DollResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.num);
            if (message.curPos != null && message.hasOwnProperty("curPos"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curPos);
            if (message.curPlayer != null && message.hasOwnProperty("curPlayer"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.curPlayer);
            if (message.nextPlayer != null && message.hasOwnProperty("nextPlayer"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nextPlayer);
            return writer;
        };

        /**
         * Encodes the specified DollResult message, length delimited. Does not implicitly {@link slproto.DollResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.DollResult
         * @static
         * @param {slproto.IDollResult} message DollResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DollResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DollResult message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.DollResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.DollResult} DollResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DollResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.DollResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.num = reader.int32();
                    break;
                case 2:
                    message.curPos = reader.int32();
                    break;
                case 3:
                    message.curPlayer = reader.int32();
                    break;
                case 4:
                    message.nextPlayer = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DollResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.DollResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.DollResult} DollResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DollResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DollResult message.
         * @function verify
         * @memberof slproto.DollResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DollResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            if (message.curPos != null && message.hasOwnProperty("curPos"))
                if (!$util.isInteger(message.curPos))
                    return "curPos: integer expected";
            if (message.curPlayer != null && message.hasOwnProperty("curPlayer"))
                if (!$util.isInteger(message.curPlayer))
                    return "curPlayer: integer expected";
            if (message.nextPlayer != null && message.hasOwnProperty("nextPlayer"))
                if (!$util.isInteger(message.nextPlayer))
                    return "nextPlayer: integer expected";
            return null;
        };

        /**
         * Creates a DollResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.DollResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.DollResult} DollResult
         */
        DollResult.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.DollResult)
                return object;
            var message = new $root.slproto.DollResult();
            if (object.num != null)
                message.num = object.num | 0;
            if (object.curPos != null)
                message.curPos = object.curPos | 0;
            if (object.curPlayer != null)
                message.curPlayer = object.curPlayer | 0;
            if (object.nextPlayer != null)
                message.nextPlayer = object.nextPlayer | 0;
            return message;
        };

        /**
         * Creates a plain object from a DollResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.DollResult
         * @static
         * @param {slproto.DollResult} message DollResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DollResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.num = 0;
                object.curPos = 0;
                object.curPlayer = 0;
                object.nextPlayer = 0;
            }
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.curPos != null && message.hasOwnProperty("curPos"))
                object.curPos = message.curPos;
            if (message.curPlayer != null && message.hasOwnProperty("curPlayer"))
                object.curPlayer = message.curPlayer;
            if (message.nextPlayer != null && message.hasOwnProperty("nextPlayer"))
                object.nextPlayer = message.nextPlayer;
            return object;
        };

        /**
         * Converts this DollResult to JSON.
         * @function toJSON
         * @memberof slproto.DollResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DollResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DollResult;
    })();

    slproto.ReplayResult = (function() {

        /**
         * Properties of a ReplayResult.
         * @memberof slproto
         * @interface IReplayResult
         * @property {number|null} [gameId] ReplayResult gameId
         * @property {string|null} [process] ReplayResult process
         */

        /**
         * Constructs a new ReplayResult.
         * @memberof slproto
         * @classdesc Represents a ReplayResult.
         * @implements IReplayResult
         * @constructor
         * @param {slproto.IReplayResult=} [properties] Properties to set
         */
        function ReplayResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplayResult gameId.
         * @member {number} gameId
         * @memberof slproto.ReplayResult
         * @instance
         */
        ReplayResult.prototype.gameId = 0;

        /**
         * ReplayResult process.
         * @member {string} process
         * @memberof slproto.ReplayResult
         * @instance
         */
        ReplayResult.prototype.process = "";

        /**
         * Creates a new ReplayResult instance using the specified properties.
         * @function create
         * @memberof slproto.ReplayResult
         * @static
         * @param {slproto.IReplayResult=} [properties] Properties to set
         * @returns {slproto.ReplayResult} ReplayResult instance
         */
        ReplayResult.create = function create(properties) {
            return new ReplayResult(properties);
        };

        /**
         * Encodes the specified ReplayResult message. Does not implicitly {@link slproto.ReplayResult.verify|verify} messages.
         * @function encode
         * @memberof slproto.ReplayResult
         * @static
         * @param {slproto.IReplayResult} message ReplayResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            if (message.process != null && message.hasOwnProperty("process"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.process);
            return writer;
        };

        /**
         * Encodes the specified ReplayResult message, length delimited. Does not implicitly {@link slproto.ReplayResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.ReplayResult
         * @static
         * @param {slproto.IReplayResult} message ReplayResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplayResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplayResult message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.ReplayResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.ReplayResult} ReplayResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.ReplayResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int32();
                    break;
                case 2:
                    message.process = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReplayResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.ReplayResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.ReplayResult} ReplayResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplayResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplayResult message.
         * @function verify
         * @memberof slproto.ReplayResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplayResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.process != null && message.hasOwnProperty("process"))
                if (!$util.isString(message.process))
                    return "process: string expected";
            return null;
        };

        /**
         * Creates a ReplayResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.ReplayResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.ReplayResult} ReplayResult
         */
        ReplayResult.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.ReplayResult)
                return object;
            var message = new $root.slproto.ReplayResult();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.process != null)
                message.process = String(object.process);
            return message;
        };

        /**
         * Creates a plain object from a ReplayResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.ReplayResult
         * @static
         * @param {slproto.ReplayResult} message ReplayResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplayResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = 0;
                object.process = "";
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.process != null && message.hasOwnProperty("process"))
                object.process = message.process;
            return object;
        };

        /**
         * Converts this ReplayResult to JSON.
         * @function toJSON
         * @memberof slproto.ReplayResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplayResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReplayResult;
    })();

    slproto.SignIn = (function() {

        /**
         * Properties of a SignIn.
         * @memberof slproto
         * @interface ISignIn
         * @property {string|null} [username] SignIn username
         */

        /**
         * Constructs a new SignIn.
         * @memberof slproto
         * @classdesc Represents a SignIn.
         * @implements ISignIn
         * @constructor
         * @param {slproto.ISignIn=} [properties] Properties to set
         */
        function SignIn(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignIn username.
         * @member {string} username
         * @memberof slproto.SignIn
         * @instance
         */
        SignIn.prototype.username = "";

        /**
         * Creates a new SignIn instance using the specified properties.
         * @function create
         * @memberof slproto.SignIn
         * @static
         * @param {slproto.ISignIn=} [properties] Properties to set
         * @returns {slproto.SignIn} SignIn instance
         */
        SignIn.create = function create(properties) {
            return new SignIn(properties);
        };

        /**
         * Encodes the specified SignIn message. Does not implicitly {@link slproto.SignIn.verify|verify} messages.
         * @function encode
         * @memberof slproto.SignIn
         * @static
         * @param {slproto.ISignIn} message SignIn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignIn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified SignIn message, length delimited. Does not implicitly {@link slproto.SignIn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.SignIn
         * @static
         * @param {slproto.ISignIn} message SignIn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignIn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignIn message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.SignIn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.SignIn} SignIn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignIn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.SignIn();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignIn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.SignIn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.SignIn} SignIn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignIn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignIn message.
         * @function verify
         * @memberof slproto.SignIn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignIn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a SignIn message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.SignIn
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.SignIn} SignIn
         */
        SignIn.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.SignIn)
                return object;
            var message = new $root.slproto.SignIn();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a SignIn message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.SignIn
         * @static
         * @param {slproto.SignIn} message SignIn
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignIn.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.username = "";
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this SignIn to JSON.
         * @function toJSON
         * @memberof slproto.SignIn
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignIn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignIn;
    })();

    slproto.Match = (function() {

        /**
         * Properties of a Match.
         * @memberof slproto
         * @interface IMatch
         * @property {number|null} [num] Match num
         */

        /**
         * Constructs a new Match.
         * @memberof slproto
         * @classdesc Represents a Match.
         * @implements IMatch
         * @constructor
         * @param {slproto.IMatch=} [properties] Properties to set
         */
        function Match(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Match num.
         * @member {number} num
         * @memberof slproto.Match
         * @instance
         */
        Match.prototype.num = 0;

        /**
         * Creates a new Match instance using the specified properties.
         * @function create
         * @memberof slproto.Match
         * @static
         * @param {slproto.IMatch=} [properties] Properties to set
         * @returns {slproto.Match} Match instance
         */
        Match.create = function create(properties) {
            return new Match(properties);
        };

        /**
         * Encodes the specified Match message. Does not implicitly {@link slproto.Match.verify|verify} messages.
         * @function encode
         * @memberof slproto.Match
         * @static
         * @param {slproto.IMatch} message Match message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Match.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified Match message, length delimited. Does not implicitly {@link slproto.Match.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.Match
         * @static
         * @param {slproto.IMatch} message Match message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Match.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Match message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.Match
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.Match} Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Match.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.Match();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Match message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.Match
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.Match} Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Match.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Match message.
         * @function verify
         * @memberof slproto.Match
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Match.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };

        /**
         * Creates a Match message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.Match
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.Match} Match
         */
        Match.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.Match)
                return object;
            var message = new $root.slproto.Match();
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a Match message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.Match
         * @static
         * @param {slproto.Match} message Match
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Match.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.num = 0;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this Match to JSON.
         * @function toJSON
         * @memberof slproto.Match
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Match.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Match;
    })();

    slproto.Doll = (function() {

        /**
         * Properties of a Doll.
         * @memberof slproto
         * @interface IDoll
         */

        /**
         * Constructs a new Doll.
         * @memberof slproto
         * @classdesc Represents a Doll.
         * @implements IDoll
         * @constructor
         * @param {slproto.IDoll=} [properties] Properties to set
         */
        function Doll(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Doll instance using the specified properties.
         * @function create
         * @memberof slproto.Doll
         * @static
         * @param {slproto.IDoll=} [properties] Properties to set
         * @returns {slproto.Doll} Doll instance
         */
        Doll.create = function create(properties) {
            return new Doll(properties);
        };

        /**
         * Encodes the specified Doll message. Does not implicitly {@link slproto.Doll.verify|verify} messages.
         * @function encode
         * @memberof slproto.Doll
         * @static
         * @param {slproto.IDoll} message Doll message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Doll.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Doll message, length delimited. Does not implicitly {@link slproto.Doll.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.Doll
         * @static
         * @param {slproto.IDoll} message Doll message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Doll.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Doll message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.Doll
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.Doll} Doll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Doll.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.Doll();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Doll message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.Doll
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.Doll} Doll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Doll.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Doll message.
         * @function verify
         * @memberof slproto.Doll
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Doll.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Doll message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.Doll
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.Doll} Doll
         */
        Doll.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.Doll)
                return object;
            return new $root.slproto.Doll();
        };

        /**
         * Creates a plain object from a Doll message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.Doll
         * @static
         * @param {slproto.Doll} message Doll
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Doll.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Doll to JSON.
         * @function toJSON
         * @memberof slproto.Doll
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Doll.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Doll;
    })();

    slproto.Replay = (function() {

        /**
         * Properties of a Replay.
         * @memberof slproto
         * @interface IReplay
         * @property {number|null} [gameId] Replay gameId
         */

        /**
         * Constructs a new Replay.
         * @memberof slproto
         * @classdesc Represents a Replay.
         * @implements IReplay
         * @constructor
         * @param {slproto.IReplay=} [properties] Properties to set
         */
        function Replay(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Replay gameId.
         * @member {number} gameId
         * @memberof slproto.Replay
         * @instance
         */
        Replay.prototype.gameId = 0;

        /**
         * Creates a new Replay instance using the specified properties.
         * @function create
         * @memberof slproto.Replay
         * @static
         * @param {slproto.IReplay=} [properties] Properties to set
         * @returns {slproto.Replay} Replay instance
         */
        Replay.create = function create(properties) {
            return new Replay(properties);
        };

        /**
         * Encodes the specified Replay message. Does not implicitly {@link slproto.Replay.verify|verify} messages.
         * @function encode
         * @memberof slproto.Replay
         * @static
         * @param {slproto.IReplay} message Replay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Replay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified Replay message, length delimited. Does not implicitly {@link slproto.Replay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof slproto.Replay
         * @static
         * @param {slproto.IReplay} message Replay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Replay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Replay message from the specified reader or buffer.
         * @function decode
         * @memberof slproto.Replay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {slproto.Replay} Replay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Replay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.slproto.Replay();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Replay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof slproto.Replay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {slproto.Replay} Replay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Replay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Replay message.
         * @function verify
         * @memberof slproto.Replay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Replay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a Replay message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof slproto.Replay
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {slproto.Replay} Replay
         */
        Replay.fromObject = function fromObject(object) {
            if (object instanceof $root.slproto.Replay)
                return object;
            var message = new $root.slproto.Replay();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a Replay message. Also converts values to other types if specified.
         * @function toObject
         * @memberof slproto.Replay
         * @static
         * @param {slproto.Replay} message Replay
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Replay.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gameId = 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this Replay to JSON.
         * @function toJSON
         * @memberof slproto.Replay
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Replay.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Replay;
    })();

    return slproto;
})();

module.exports = $root;
