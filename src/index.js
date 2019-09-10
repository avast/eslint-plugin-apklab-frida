'use strict';

import checkFileJsdoc from "./rules/checkFileJsdoc";

export default {
    configs: {
        recommended: {
            plugins: [ "apklab-frida" ],
            extends: ["eslint:recommended", "google"],
            parserOptions: {
                ecmaVersion: 6,
                sourceType: "script",
                comment: true,
            },
            env: {
                node: true,
            },
            globals: {
                hexdump: "readonly",
                recv: "readonly",
                send: "readonly",
                int64: "readonly",
                uint64: "readonly",
                ptr: "readonly",
                NULL: "readonly",

                rpc: "readonly",
                Frida: "readonly",
                Script: "readonly",
                Process: "readonly",
                Module: "readonly",
                ModuleMap: "readonly",
                Memory: "readonly",
                MemoryAccessMonitor: "readonly",
                Thread: "readonly",
                Int64: "readonly",
                UInt64: "readonly",
                NativePointer: "readonly",
                NativeFunction: "readonly",
                NativeCallback: "readonly",
                SystemFunction: "readonly",
                Socket: "readonly",
                SocketListener: "readonly",
                SocketConnection: "readonly",
                IOStream: "readonly",
                InputStream: "readonly",
                OutputStream: "readonly",
                UnixInputStream: "readonly",
                UnixOutputStream: "readonly",
                Win32InputStream: "readonly",
                Win32OutputStream: "readonly",
                File: "readonly",
                SqliteDatabase: "readonly",
                SqliteStatement: "readonly",
                Interceptor: "readonly",
                Stalker: "readonly",
                ApiResolver: "readonly",
                DebugSymbol: "readonly",
                Instruction: "readonly",
                Kernel: "readonly",
                ObjC: "readonly",
                Java: "readonly",
                WeakRef: "readonly",
                X86Writer: "readonly",
                X86Relocator: "readonly",
                ArmWriter: "readonly",
                ArmRelocator: "readonly",
                ThumbWriter: "readonly",
                ThumbRelocator: "readonly",
                Arm64Writer: "readonly",
                Arm64Relocator: "readonly",
                MipsWriter: "readonly",
                MipsRelocator: "readonly",
            },
            rules: {
                "apklab-frida/check-file-jsdoc": "error",

                "max-len": ["error", {
                    "code": 120,
                    "tabWidth": 2,
                    "ignoreUrls": true
                }],
                "no-var": "warn",
                "no-console": "off",

                // Frida Duktape does not support all ES6 features
                "arrow-body-style": "off",
                "arrow-parens": "off",
                "arrow-spacing": "off",
                "constructor-super": "off",
                "generator-star-spacing": "off",
                "no-class-assign": "off",
                "no-confusing-arrow": "off",
                "no-dupe-class-members": "off",
                "no-duplicate-imports": "off",
                "no-new-symbol": "off",
                "no-restricted-imports": "off",
                "no-this-before-super": "off",
                "no-useless-computed-key": "off",
                "no-useless-constructor": "off",
                "no-useless-rename": "off",
                "object-shorthand": "off",
                "prefer-arrow-callback": "off",
                "prefer-destructuring": "off",
                "prefer-numeric-literals": "off",
                "prefer-rest-params": "off",
                "prefer-spread": "off",
                "prefer-template": "off",
                "require-yield": "off",
                "rest-spread-spacing": "off",
                "sort-imports": "off",
                "symbol-description": "off",
                "template-curly-spacing": "off",
                "yield-star-spacing": "off",
            }
        }
    },
    rules: {
        "check-file-jsdoc": checkFileJsdoc,
    }
};