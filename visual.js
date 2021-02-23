
describe('Visuals', () => {

 const sizes = [
    ['iphone-6', 'landscape'],
    'iphone-6',
    'ipad-2',
    ['ipad-2', 'landscape'],
    [1920, 1080],
 ];

    sizes.forEach((size) => {
        it(`Should match previous screenshot when '${size}' resolution`, () => {
            cy.setResolution(size);
            cy.visit("https://short.io")

            cy.get('.intercom-lightweight-app').then(($em) => {
               cy.wrap($em)
              $em.remove()
            }).then(elem => {
              cy.get('#intercom-frame').then(($em) => {
                cy.wrap($em)
               $em.remove()
            }).then(elem => {
              cy.get("#___gatsby").matchImageSnapshot()
          })
     
      })
    })
   })

   //cy.get('#___gatsby').then((el) => {
    //var x = document.getElementsByTagName("img").length
    //var i;
    //for (i = 0; i < x; i++) {
      //y[i].removeAttribute("loading")
   // }
  
})

    
//it('should compare screenshot of the entire page', () => {

  //cy.visit("https://short.io")
  //cy.get("#___gatsby").matchImageSnapshot()
//})
  //const sizes = [
    //['iphone-6', 'landscape'],
    //'iphone-6',
    //'ipad-2',
    //['ipad-2', 'landscape'],
   // [1920, 1080],
 // ];

  //describe('Visual regression tests', () => {
    //sizes.forEach((size) => {
       // it(`Should match previous screenshot when '${size}' resolution`, () => {
          //cy.setResolution(size);
          //cy.visit("https://short.io");
          //cy.wait(6000)
          //cy.get("#___gatsby").matchImageSnapshot();
        //});
      //});
   // });

   //it('should compare screenshot of the entire page', () => {

    //cy.visit("https://short.io")
 
    //cy.get('.intercom-lightweight-app').then(($em) => {
       //cy.wrap($em)
       //$em.remove()
     //}).then(elem => {
       //cy.get("#___gatsby").matchImageSnapshot('home')
    // })
     
    //})