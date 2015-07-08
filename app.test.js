var superagent = require('superagent')
var expect = require('expect.js')
var Agent = require('agentkeepalive')


describe('openDSD fetching', function() {
      it('retrieves a collection', function(done){
    superagent.get('http://localhost:8080/')
      .end(function(e, res){
        //console.log(res.body.features)
        expect(e).to.eql(null)
        expect(typeof res.body.features).to.eql('object')
        expect(res.body.features.length).to.be.above(0)
        //expect(res.body._id).to.eql(id)
        done()
      })
  })
})
