var screen1=document.getElementById("screen1"),screen2=document.getElementById("screen2"),screen3=document.getElementById("screen3");function changeScreen(e){"screen1"==e?(screen1.style.display="block",screen2.style.display="none",screen3.style.display="none",document.getElementById("home").classList.add("active"),document.getElementById("application").classList.remove("active"),document.getElementById("documents").classList.remove("active")):"screen2"==e?(screen1.style.display="none",screen2.style.display="block",screen3.style.display="none",document.getElementById("application").classList.add("active"),document.getElementById("home").classList.remove("active"),document.getElementById("documents").classList.remove("active")):(screen1.style.display="none",screen2.style.display="none",screen3.style.display="block",document.getElementById("documents").classList.add("active"),document.getElementById("home").classList.remove("active"),document.getElementById("application").classList.remove("active"))}var selectDropdown=document.getElementById("select-dropdown"),selectBox=document.getElementById("select-box"),selectInput=document.getElementById("select-input");selectInput.addEventListener("click",(function(){selectDropdown.classList.toggle("show")})),window.addEventListener("click",(function(e){selectBox.contains(e.target)||selectDropdown.classList.remove("show")}));for(var dropdownList=document.getElementsByClassName("dropdown-list"),i=0;i<dropdownList.length;i++){var current=dropdownList[i];current.addEventListener("click",(function(){selectInput.innerHTML=event.target.innerHTML,selectDropdown.classList.remove("show")}))}var tab1=document.getElementById("tab-1"),tab2=document.getElementById("tab-2");tab1.addEventListener("click",(function(){tab1.classList.add("active"),tab2.classList.remove("active")})),tab2.addEventListener("click",(function(){tab1.classList.remove("active"),tab2.classList.add("active")}));var dropArea=document.getElementById("dropbox");dropArea.addEventListener("dragover",(function(e){e.preventDefault(),dropArea.classList.add("dragover")})),dropArea.addEventListener("dragleave",(function(){dropArea.classList.remove("dragover")})),dropArea.addEventListener("drop",(function(e){e.preventDefault();var t=e.dataTransfer.files[0],n=t.name,s=t.type,d=t.size;if(dropArea.classList.remove("dragover"),"image/png"!=s&&"image/jpg"!=s&&"application/pdf"!=s)return document.getElementById("invalid-text").innerHTML="Invalid File Format",document.getElementById("invalid-text").style.color="red",dropArea.classList.add("invalid"),!1;document.getElementById("file-name").innerText=n,"image/png"==s?document.getElementById("file-type").innerHTML="PNG":"image/jpg"==s?document.getElementById("file-type").innerHTML="JPG":"application/pdf"==s&&(document.getElementById("file-type").innerHTML="PDF"),document.getElementById("file-size").innerHTML=d}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJzY3JlZW4xIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcmVlbjIiLCJzY3JlZW4zIiwiY2hhbmdlU2NyZWVuIiwic2NyZWVuIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2VsZWN0RHJvcGRvd24iLCJzZWxlY3RCb3giLCJzZWxlY3RJbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkcm9wZG93bkxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJldmVudCIsInRhYjEiLCJ0YWIyIiwiZHJvcEFyZWEiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGUiLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsImZpbGVOYW1lIiwibmFtZSIsImZpbGVUeXBlIiwidHlwZSIsImZpbGVTaXplIiwic2l6ZSIsImNvbG9yIiwiaW5uZXJUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFBQSxRQUFBQyxTQUFBQyxlQUFBLFdBQ0FDLFFBQUFGLFNBQUFDLGVBQUEsV0FDQUUsUUFBQUgsU0FBQUMsZUFBQSxXQUNBLFNBQUFHLGFBQUFDLEdBQ0EsV0FBQUEsR0FDQU4sUUFBQU8sTUFBQUMsUUFBQSxRQUNBTCxRQUFBSSxNQUFBQyxRQUFBLE9BQ0FKLFFBQUFHLE1BQUFDLFFBQUEsT0FDQVAsU0FBQUMsZUFBQSxRQUFBTyxVQUFBQyxJQUFBLFVBQ0FULFNBQUFDLGVBQUEsZUFBQU8sVUFBQUUsT0FBQSxVQUNBVixTQUFBQyxlQUFBLGFBQUFPLFVBQUFFLE9BQUEsV0FDQSxXQUFBTCxHQUNBTixRQUFBTyxNQUFBQyxRQUFBLE9BQ0FMLFFBQUFJLE1BQUFDLFFBQUEsUUFDQUosUUFBQUcsTUFBQUMsUUFBQSxPQUNBUCxTQUFBQyxlQUFBLGVBQUFPLFVBQUFDLElBQUEsVUFDQVQsU0FBQUMsZUFBQSxRQUFBTyxVQUFBRSxPQUFBLFVBQ0FWLFNBQUFDLGVBQUEsYUFBQU8sVUFBQUUsT0FBQSxZQUVBWCxRQUFBTyxNQUFBQyxRQUFBLE9BQ0FMLFFBQUFJLE1BQUFDLFFBQUEsT0FDQUosUUFBQUcsTUFBQUMsUUFBQSxRQUNBUCxTQUFBQyxlQUFBLGFBQUFPLFVBQUFDLElBQUEsVUFDQVQsU0FBQUMsZUFBQSxRQUFBTyxVQUFBRSxPQUFBLFVBQ0FWLFNBQUFDLGVBQUEsZUFBQU8sVUFBQUUsT0FBQSxXQU1BLElBQUFDLGVBQUFYLFNBQUFDLGVBQUEsbUJBQ0FXLFVBQUFaLFNBQUFDLGVBQUEsY0FDQVksWUFBQWIsU0FBQUMsZUFBQSxnQkFDQVksWUFBQUMsaUJBQUEsU0FBQSxXQUNBSCxlQUFBSCxVQUFBTyxPQUFBLFdBR0FDLE9BQUFGLGlCQUFBLFNBQUEsU0FBQUcsR0FDQUwsVUFBQU0sU0FBQUQsRUFBQUUsU0FDQVIsZUFBQUgsVUFBQUUsT0FBQSxXQUtBLElBREEsSUFBQVUsYUFBQXBCLFNBQUFxQix1QkFBQSxpQkFDQUMsRUFBQSxFQUFBQSxFQUFBRixhQUFBRyxPQUFBRCxJQUFBLENBQ0EsSUFBQUUsUUFBQUosYUFBQUUsR0FDQUUsUUFBQVYsaUJBQUEsU0FBQSxXQUNBRCxZQUFBWSxVQUFBQyxNQUFBUCxPQUFBTSxVQUNBZCxlQUFBSCxVQUFBRSxPQUFBLFdBSUEsSUFBQWlCLEtBQUEzQixTQUFBQyxlQUFBLFNBQ0EyQixLQUFBNUIsU0FBQUMsZUFBQSxTQUNBMEIsS0FBQWIsaUJBQUEsU0FBQSxXQUNBYSxLQUFBbkIsVUFBQUMsSUFBQSxVQUNBbUIsS0FBQXBCLFVBQUFFLE9BQUEsYUFFQWtCLEtBQUFkLGlCQUFBLFNBQUEsV0FDQWEsS0FBQW5CLFVBQUFFLE9BQUEsVUFDQWtCLEtBQUFwQixVQUFBQyxJQUFBLGFBS0EsSUFBQW9CLFNBQUE3QixTQUFBQyxlQUFBLFdBRUE0QixTQUFBZixpQkFBQSxZQUFBLFNBQUFHLEdBQ0FBLEVBQUFhLGlCQUNBRCxTQUFBckIsVUFBQUMsSUFBQSxlQUVBb0IsU0FBQWYsaUJBQUEsYUFBQSxXQUNBZSxTQUFBckIsVUFBQUUsT0FBQSxlQUVBbUIsU0FBQWYsaUJBQUEsUUFBQSxTQUFBRyxHQUNBQSxFQUFBYSxpQkFDQSxJQUFBQyxFQUFBZCxFQUFBZSxhQUFBQyxNQUFBLEdBQ0FDLEVBQUFILEVBQUFJLEtBQ0FDLEVBQUFMLEVBQUFNLEtBQ0FDLEVBQUFQLEVBQUFRLEtBRUEsR0FEQVYsU0FBQXJCLFVBQUFFLE9BQUEsWUFDQSxhQUFBMEIsR0FBQSxhQUFBQSxHQUFBLG1CQUFBQSxFQWNBLE9BSEFwQyxTQUFBQyxlQUFBLGdCQUFBd0IsVUFBQSxzQkFDQXpCLFNBQUFDLGVBQUEsZ0JBQUFLLE1BQUFrQyxNQUFBLE1BQ0FYLFNBQUFyQixVQUFBQyxJQUFBLFlBQ0EsRUFiQVQsU0FBQUMsZUFBQSxhQUFBd0MsVUFBQVAsRUFDQSxhQUFBRSxFQUNBcEMsU0FBQUMsZUFBQSxhQUFBd0IsVUFBQSxNQUNBLGFBQUFXLEVBQ0FwQyxTQUFBQyxlQUFBLGFBQUF3QixVQUFBLE1BQ0EsbUJBQUFXLElBQ0FwQyxTQUFBQyxlQUFBLGFBQUF3QixVQUFBLE9BRUF6QixTQUFBQyxlQUFBLGFBQUF3QixVQUFBYSIsImZpbGUiOiJmaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzY3JlZW4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY3JlZW4xXCIpO1xyXG52YXIgc2NyZWVuMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NyZWVuMlwiKTtcclxudmFyIHNjcmVlbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcmVlbjNcIik7XHJcbmZ1bmN0aW9uIGNoYW5nZVNjcmVlbihzY3JlZW4pIHtcclxuICAgIGlmIChzY3JlZW4gPT0gXCJzY3JlZW4xXCIpIHtcclxuICAgICAgICBzY3JlZW4xLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc2NyZWVuMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgc2NyZWVuMy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBsaWNhdGlvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9jdW1lbnRzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2UgaWYgKHNjcmVlbiA9PSBcInNjcmVlbjJcIikge1xyXG4gICAgICAgIHNjcmVlbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHNjcmVlbjIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzY3JlZW4zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcGxpY2F0aW9uXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb2N1bWVudHNcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2NyZWVuMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgc2NyZWVuMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgc2NyZWVuMy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9jdW1lbnRzXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBsaWNhdGlvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbnZhciBzZWxlY3REcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LWRyb3Bkb3duXCIpO1xyXG52YXIgc2VsZWN0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtYm94XCIpO1xyXG52YXIgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1pbnB1dFwiKTtcclxuc2VsZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzZWxlY3REcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxufSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoIXNlbGVjdEJveC5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICBzZWxlY3REcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgZHJvcGRvd25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWxpc3RcIik7XHJcbmZvciAodmFyIGkgPSAwOyBpIDwgZHJvcGRvd25MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgY3VycmVudCA9IGRyb3Bkb3duTGlzdFtpXTtcclxuICAgIGN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZWN0SW5wdXQuaW5uZXJIVE1MID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTDtcclxuICAgICAgICBzZWxlY3REcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG52YXIgdGFiMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiLTFcIik7XHJcbnZhciB0YWIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWItMlwiKTtcclxudGFiMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRhYjEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIHRhYjIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufSlcclxudGFiMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRhYjEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIHRhYjIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufSk7XHJcblxyXG4vLyBkcmFnIGFuZCBkcm9wIFxyXG5cclxudmFyIGRyb3BBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wYm94XCIpO1xyXG5cclxuZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZHJvcEFyZWEuY2xhc3NMaXN0LmFkZChcImRyYWdvdmVyXCIpO1xyXG59KVxyXG5kcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkcm9wQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ292ZXJcIik7XHJcbn0pXHJcbmRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcclxuICAgIHZhciBmaWxlTmFtZSA9IGZpbGUubmFtZTtcclxuICAgIHZhciBmaWxlVHlwZSA9IGZpbGUudHlwZTtcclxuICAgIHZhciBmaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcclxuICAgIGRyb3BBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnb3ZlclwiKTtcclxuICAgIGlmIChmaWxlVHlwZSA9PSBcImltYWdlL3BuZ1wiIHx8IGZpbGVUeXBlID09IFwiaW1hZ2UvanBnXCIgfHwgZmlsZVR5cGUgPT0gXCJhcHBsaWNhdGlvbi9wZGZcIikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS1uYW1lXCIpLmlubmVyVGV4dCA9IGZpbGVOYW1lO1xyXG4gICAgICAgIGlmIChmaWxlVHlwZSA9PSBcImltYWdlL3BuZ1wiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS10eXBlXCIpLmlubmVySFRNTCA9IFwiUE5HXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlVHlwZSA9PSBcImltYWdlL2pwZ1wiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS10eXBlXCIpLmlubmVySFRNTCA9IFwiSlBHXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlVHlwZSA9PSBcImFwcGxpY2F0aW9uL3BkZlwiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS10eXBlXCIpLmlubmVySFRNTCA9IFwiUERGXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZS1zaXplXCIpLmlubmVySFRNTCA9IGZpbGVTaXplO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWQtdGV4dFwiKS5pbm5lckhUTUwgPSBcIkludmFsaWQgRmlsZSBGb3JtYXRcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWQtdGV4dFwiKS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgZHJvcEFyZWEuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuIl19
