
/* 
    Basic of the mocha.js
        install the mocha using following command:
            npm install --global mocha
        as a development dependency for your project:
         npm install --save-dev mocha
 */


const assert = require('assert');

describe('file to be tested',() =>{
    context('function to be tested', ()=>{

        before(()=>{
            console.log('============= before');
        });

        after(()=>{
            console.log('============= after');
        });

        beforeEach(()=> console.log('---- before each'));

        afterEach(()=> console.log('---- after each'));

        it('should do something',()=>{
            // assert.equal(1,2);
            assert.equal(1,1);
        })
        it('should do something else ', ()=>{
            // assert.deepEqual({name: 'joe'},{name:'steve'});
            assert.deepEqual({name: 'joe'},{name:'joe'});
        })
        it('this is pendding test',)
    })
})