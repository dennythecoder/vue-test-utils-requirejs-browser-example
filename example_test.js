
requirejs.config({
    baseUrl:'lib'
 });

define(['lib/vue-test-utils.umd.js', 'chai', '../example', 'mocha'], function(vueTestUtils, chai, components){
    mocha.setup('bdd');

    var expect = chai.expect;
    
    describe('super-counter',function(){
      
      it("initially displays 0", function(done){
        var wrapper = vueTestUtils.mount(components.superCounter);
        expect(wrapper.text()).to.equal("0");
        done();
      });
    
      it("after click displays 1", function(done){
        var wrapper = vueTestUtils.mount(components.superCounter);
        wrapper.trigger("click");
        expect(wrapper.text()).to.equal("1");
        done();
      });
    
    });
    
    mocha.run();
})

