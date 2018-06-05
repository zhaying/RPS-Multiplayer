// assets/js/script.js

// Variables
var weapons =  {
  'rock': '0',
  'paper': '1',
  'scissors': '2'
};
var rps = {
  compare: function(player1,player2) {
      var userAnswers = player1.selection + player2.selection;
      console.log('console.log.userAnswers=',userAnswers);
      if (userAnswers === "00" || userAnswers === "11" || userAnswers === "22"){
        console.log("tie");

      } else if (userAnswers === "10" || userAnswers === "02" || userAnswers === "21") {
        console.log("LevelUp player1");
        this.player1.score++;
        this.player2.score--;

      } else if (userAnswers === "01" || userAnswers === "20" || userAnswers === "12") {
        console.log("LevelUp player2");
        this.player2.score++;
        this.player1.score--;

      }
  },
  player1: {
    the_input: $('input[name="player1"]:checked'),
    selection: $('#player1Div').on( "click", function() {
      var player1Selection = this.the_input.val();
      console.log( 'console.log.player1.divclick=',player1Selection );
      return player1Selection;
    }),
    score: 0
  },
  player2: {
    the_input: $('input[name="player2"]:checked'),
    selection: $( "#player2Div" ).on( "click", function() {
      var player2Selection = player2.input.val();
      console.log( 'console.log.player1.divclick=',player2Selection );
      return player2Selection;
    }),
    score: 0
  }
};

// Wait for dom elements to be ready
$(document).ready(function() {

    console.log("ready!");
    console.log("console.log player1 selection=",rps.player1.selction);
    console.log("console.log player2 selection=",rps.player2.selction);
    if(rps.player1.selction && rps.player2.section ){
      console.log("Comparing values!");
    } else {
      console.log("No selection has been made!");
    }
//rps.compare(rps.player1.selection, rps.player2.selection);

    // Testing
    // console.log("anArrayList:", anArrayList);
    // console.log("anObjectList:", anObjectList);

    // Load cloud button list
    // $('#keywords').jQCloud(anObjectList);

    // // set event lisener for search button
    // $("#btnCategory").on("click", function() {
    //
    //   // Add a category by clicking button.
    //   addACategory();
    //
    // }); //end btnCategory

    // set event lisener for input box
    // $("#inputSearch").keypress(function(e) {
    //
    //   if(e.which == 13) {
    //     // Add a category by pressing enter.
    //     addACategory();
    //   } //end if
    //
    // }); //end inputSearch

}); //end document.ready

// // BGN FUNCTIONS
// function addACategory() {
//   // Store user input
//   let userCategory = $('#inputSearch').val();
//
//   // Add user input into the array
//   anArrayList.push(userCategory);
//
//   // Store and create jqcloud data for user input
//   let aUserObjectList = createJQcloudFormattedData(anArrayList);
//
//   // Testing
//   // console.log("console.log.aUserObjectList=",aUserObjectList);
//
//   // Update view of cloud buttons
//   $('#keywords').jQCloud('update', aUserObjectList);
//
//   // Clear input box
//   $('#inputSearch').val('');
// };
// function createRandomProductsArray(quantity) {
//     //Define array
//     var arrayOfProducts = [];
//     //Create a random list of products
//     let i;
//     for (i = 0; i < quantity; ++i) {
//         let aRandomProduct = faker.commerce.product();
//         //let aRandomProduct = faker.random.arrayElement(faker.definitions.commerce.product_name.product);
//         arrayOfProducts.push(aRandomProduct);
//
//
//     }
//     // Testing
//     // console.log("arrayOfProducts:", arrayOfProducts);
//     let newArray = removeDuplicates(arrayOfProducts);
//     return newArray;
//
// }; //end createRandomProductsArray
//
// function createJQcloudFormattedData(anArrayList) {
//     //Define array
//     var words = [];
//     //Create a random list of products
//     anArrayList.forEach(function(item, index) {
//         // Testing
//         // console.log("console.log.item=",item);
//         var anObj = {
//             text: item,
//             weight: faker.random.number({
//                 min: 1,
//                 max: 10
//             }),
//             handlers: {
//                 click: function() {
//                     // url for api
//                     let url = "https://api.giphy.com/v1/gifs/search?q=" +
//                         item +
//                         "&api_key=xpk7qtWFTosq9WPfU94mFoqXyCSGmSj9&limit=10";
//                     var xhr = $.get(url);
//                     xhr.done(function(results) {
//                       // Testing
//                       // console.log("success got results", results);
//                       appendImagesToSection(results);
//                     }); //end xhr.done
//                 } //end click
//             }, //end handers funciton
//         }; //end anObj
//         words.push(anObj);
//     }); //end anArrayList
//
//     //Have the function return the new array list.
//     return words;
//
// }; //end createJQcloudFormattedData
//
// function removeDuplicates(arr) {
//     let unique_array = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (unique_array.indexOf(arr[i]) == -1) {
//             unique_array.push(arr[i]);
//         }
//     }
//     return unique_array;
// }; //end removeDuplicates
//
// function determineRating(itemRating) {
//     // div to attach image to
//     var spanStack = $('<span class="fa-stack fa-3x">');
//     var square    = $('<i class="fa fa-square-o fa-stack-2x">');
//
//     // attach square to span
//     square.appendTo(spanStack);
//
//     // Determine which rating to attach to which image
//     if (itemRating === "y") {
//
//         var y = $('<strong class="fa-stack-1x icon-text">').html('TV<br />Y');
//         return y;
//
//     } else if (itemRating === "g") {
//
//         var g = $('<strong class="fa-stack-1x icon-text">').html('TV<br />G');
//         return g;
//
//     } else if (itemRating === "pg") {
//
//         var pg = $('<strong class="fa-stack-1x icon-text">').html('TV<br />PG');
//         return pg;
//
//     } else if (itemRating === "pg-13") {
//
//         var pg13 = $('<strong class="fa-stack-1x icon-text">').html('TV<br />PG-13');
//         return pg13;
//
//     } else if (itemRating === "r") {
//
//         var r = $('<strong class="fa-stack-1x icon-text">').html('TV<br />R');
//         return r;
//
//     } else {
//         cardText.html(itemRating);
//     }
//
// }; // end determineRating
//
// function appendImagesToSection(results) {
//     $('#artWork').empty();
//     var thedata = results.data;
//     // Testing
//     // console.log("thedata:", thedata);
//
//     thedata.forEach(function(imgItem, imgIndex) {
//       // Testing
//       // console.log("imgItem:", imgItem);
//       // console.log("imgIndex:", imgIndex);
//
//       // Variables
//       var stillImage = imgItem.images.fixed_height_small_still.url;
//       var motionImage = imgItem.images.downsized.url;
//       var itemTitle = imgItem.title;
//       var itemRating = imgItem.rating;
//       var spanStack = $('<span class="fa-stack fa-2x text-center mt-1 mb-1">');
//       var square = $('<i class="fa fa-square-o fa-stack-2x">');
//
//       // Create card div
//       var cardDiv = $('<div class="card mt-1 mb-1 col-md-3" >');
//       var cardBody = $('<div class="card-body row justify-content-center">');
//       var cardBodyCol = $('<div class="col-5 mx-auto cardBodyCol">');
//       var cardRowOne = $('<div class="card-row-1 row justify-content-center">');
//       var cardText = $('<div class="card-text">').html('<hr />');
//       var cardRating = determineRating(itemRating);
//
//       // Testing
//       // console.log("console.log.itemRating=", itemRating);
//
//       // Append all elements to create card with image and rating
//       cardRowOne.appendTo(cardDiv);
//       $('<img' + ' id="image' + imgIndex + '" class="card-img-top animateImage" />')
//           .attr('src', "" + stillImage + "") // ADD IMAGE PROPERTIES.
//           .attr('title', itemTitle)
//           .attr('alt', itemTitle)
//           .attr('data-video', 0)
//           .click(function() { toggleImage(this.id, stillImage, motionImage); } )
//           .appendTo(cardRowOne);
//       cardBody.appendTo(cardDiv);
//       cardBodyCol.appendTo(cardBody);
//       spanStack.appendTo(cardBodyCol);
//       square.appendTo(spanStack);
//       cardRating.appendTo(spanStack);
//       cardText.appendTo(cardDiv);
//       cardDiv.appendTo($('#artWork'));
//
//     }); //end thedata.forEach
//
// }; //end appendImagesToSection
//
// function toggleImage(elementID, stillImage, motionImage) {
//     // Testing
//     // console.log("thisIsMe=",elementID);
//     // console.log("dataValue=",dataValue);
//
//     // Set clickedImage to clicked element
//     var clickedImage = $('#' + elementID);
//     // Set dataValue from data video value
//     var dataValue = clickedImage.data("video");
//
//     // Change the motion of image
//     if (dataValue === 0) {
//         console.log("Motion on!");
//         clickedImage.attr('src', "" + motionImage + "");
//         clickedImage.removeData("video");
//         clickedImage.attr('data-video', 1);
//
//     } else if (dataValue === 1) {
//         console.log("Motion off!");
//         clickedImage.attr('src', "" + stillImage + "");
//         clickedImage.removeData("video");
//         clickedImage.attr('data-video', 0);
//     } //end if else
//
// }; //end toggleImage
// // END FUNCTIONS
