describe('To test the form in register page', () => {

    it('should check if email is of valid format', () => {
        const customer = new firstCryRegister("happy@gmail.com","1234","1234")
        expect(customer.email).toMatch("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"); 
        
    });
    
    it('should check if password and confirm password fields are same', () => {
        const customer = new firstCryRegister("happy@gmail.com","Testing@1234","Testing@1234")
        expect(customer.password).toBe(customer.confirmPassword); 
    });

    it('should check if password has min 8 charcters', () => {
        const customer = new firstCryRegister("happy@gmail.com","Testing@1234","Testing@1234")
        expect(customer.password.length).toBeGreaterThan(8)
    });
    
});