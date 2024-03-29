(function(window){
  "use strict";
  var App =window.App || {};
  var $ = window.jQuery;
  function FormHandler() {
    // Code will go here
    if(!selector){
      throw new Error("No selector provided");
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0){
      throw new Error("Could not find element with selector: "+ selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn){
    console.log("Setting submit handler for form");
    //More code goes here
    this.$formElement.on("submit", function(event){
      event.preventDefault();

      //Extracting the Data
      //var data = $(this).serializeArray();
      var data = {};
      $(this).serializeArray().forEach(function (item){
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);
      fn(data);
    });
  };

  App.FormHandler = FormHandler;
  window.App =App;

})(window);
