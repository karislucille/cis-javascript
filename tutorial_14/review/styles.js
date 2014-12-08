/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 14
   Review Assignment

   Author: Joshua Rodriguez
   Date:   Dec 8 2014

   Filename: styles.js


   Functions List:


   changeStyle(sheet)
      Changes style sheet from the currently active sheet to whatever style sheet
      is clicked by the user from the specified style sheet title indicated by
      the sheet parameter

*/

function changeStyle(sheet) {
   var links = document.getElementsByTagName("link");

   for (var i = 0 ; i < links.length ; i++) {
      if ((links[i].rel == "stylesheet" || links[i].rel == "alternate stylesheet") && links[i].hasAttribute("title")) {
         links[i].disabled = links[i].title != sheet;
      }

   }
}