import validateUrl from '../validateUrl';

describe("Validate URL cases", ()=>{
    it('validates correctly an URL with http', () =>{
        expect(validateUrl("http://uol.com.br")).toBe(true);
    });

    it('validates correctly an URL with www but without http', () => {
        expect(validateUrl("www.uol.com.br")).toBe(true);
    })

    it('validates correctly an URL with www and http', () =>{
        expect(validateUrl("http://www.uol.com.br")).toBe(true);
    })

    it('validates correctly an URL a secure protocol (https)', () =>{
        expect(validateUrl("https://www.uol.com.br")).toBe(true);
    })

    it('validates correctly an URL with http and port', () => {
        expect(validateUrl("http:80//www.uol.com.br")).toBe(true);
    })
    
    it('validates correctly an URL containing only the host', () => {
        expect(validateUrl("uol.com.br")).toBe(true);
    })

    it('validates correctly an invalid URL', () => {
        expect(validateUrl("uol")).toBe(false);
    })

    it('validates correctly an invalid URL containg an invalid ending', () => {
        expect(validateUrl("uol.a"));
    })

});