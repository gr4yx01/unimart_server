"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
exports.UserResolver = {
    Query: {
        user: async (_, args, { prisma }) => {
            const { id } = args;
            const user = await prisma.user.findUnique({
                where: {
                    id
                },
                include: {
                    university: true,
                }
            });
            return user;
        }
    },
    Mutation: {
        createUser: async (_, args, { prisma }) => {
            const { name, department, universityId, level, phone_no, gender, wallet_address } = args;
            console.log(wallet_address);
            try {
                const user = await prisma.user.create({
                    data: {
                        name,
                        department,
                        universityId,
                        level,
                        phone_no,
                        gender,
                        wallet_address
                    }
                });
                return user;
            }
            catch (err) {
                throw new Error(`Failed to fetch user: ${err.message}`);
            }
        },
        updateUser: async (_, args, { prisma }) => {
            const { id } = args, detail = __rest(args, ["id"]);
            const user = await prisma.user.update({
                where: {
                    id
                },
                data: Object.assign({}, detail)
            });
            return user;
        }
    }
};
