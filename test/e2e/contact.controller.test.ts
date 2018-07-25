import "mocha";
import { expect } from "chai";
import * as chakram from "chakram";
import { config } from "./001-config";

describe("E2E Test - Contact Controller", () => {
    const mockData = {
        id: 1,
        name: "Mia Palahang",
        contactNo: "01231231",
        emailAddress: "mia@palahang.com",
    };

    it("should create new Contacts", async () => {
        const { response } = await chakram.post(`${config.API_URL}/contact`, mockData);
        if (response.statusCode !== 200) console.log(JSON.stringify(response)); // tslint:disable-line
        expect(response.statusCode).to.have.equal(200);
    });

    it("should return list of Contacts", async () => {
        const { response } = await chakram.get(`${config.API_URL}/contact`);
        if (response.statusCode !== 200) console.log(JSON.stringify(response)); // tslint:disable-line
        expect(response.statusCode).to.have.equal(200);
    });

    it("should update existing Contacts", async () => {
        mockData.emailAddress = "jojie@palahang.com";
        const { response } = await chakram.put(`${config.API_URL}/contact`, mockData);
        if (response.statusCode !== 200) console.log(JSON.stringify(response)); // tslint:disable-line
        expect(response.statusCode).to.have.equal(200);
    });

    it("should return contact of Contacts", async () => {
        const { response } = await chakram.get(`${config.API_URL}/contact/1`);
        if (response.statusCode !== 200) console.log(JSON.stringify(response)); // tslint:disable-line
        expect(response.statusCode).to.have.equal(200);
    });
});
