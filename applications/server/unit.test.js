const express = require("express");
const request = require('supertest')
const app = require('./app.js')


describe("Test POST /api/login", () => {
    describe("when user name and password is passed in correctly", () => {
        test("should respond with", async () => {

            const body = {
                username: "ggg",
                password: "ggg",
            };
            const settings = {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            };


            const res = await request(app).post("/api/login").send({
                username: "eee",
                password: "eee",
            })

            expect(res.status).toBe(200)
            expect(res.body.username).toBe("eee")


        })


    })
})


describe("Test POST /api/signUp", () => {
    describe("when user name, password and confirmPassword are provided", () => {
        test("should respond with", async () => {


            const body = {
                username: "eee",
                password: "eee",
            };
            const settings = {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            };


            const res = await request(app).post("/api/signup").send({
                username: "ccc",
                password: "ccc",
                confirmPassword: "ccc"
            })

            expect(res.status).toBe(200)
            expect(res.body.message).toBe("Signed up successfully!!")


        })


    })
})

