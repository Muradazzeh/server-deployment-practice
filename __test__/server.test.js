`use strict`
const server=require("../serverfold/server")
const supertest =require("supertest")
const request = supertest(server.app)

describe("Jest test ",()=>{
test('should first Geting data from home route /', async () => { 
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('HELLO FROM THE OTHER SIDE');
 })
 test("getting data from data Route", async()=>{
     const response = await request.get("/data")
     expect(response.status).toEqual(200);
     expect(typeof response.body).toEqual("object")
 })
test("getting data frpm middle ware test rout",async()=>{
    const response=await request.get("/test")
    expect(response.status).toEqual(200)
    expect(typeof response.body).toEqual("object")
})

 test( " handle 500 internal server error",async()=>{
    const response=await request.get("/badGate")
    expect(response.status).toEqual(500)
})
 test("handle the 404 error", async()=>{
     const response=await request.get("/ddddd")
     expect(response.status).toEqual(404)
 })


})