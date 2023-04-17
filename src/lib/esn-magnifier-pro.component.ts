import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'esn-magnifier-pro',
  templateUrl: 'esn-magnifier-pro.component.html',
  styleUrls: ['esn-magnifier-pro.service.sass']
})
export class EsnMagnifierProComponent implements AfterViewInit {
  @Input() imgUrl;
  @Input() option;
  
  ngAfterViewInit(): void {
    let run = (imgId: any = this.imgUrl, zoom: any = 3) => {
      var img, glass, w, h, bw;
      img = document.getElementById(imgId);
      glass = document.getElementById('crop');
      var moveMagnifier = (e) => {
        var pos, x, y;
        e.preventDefault();
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
        if (x < w / zoom) { x = w / zoom; }
        if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
        if (y < h / zoom) { y = h / zoom; }
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
      }

      var getCursorPos = (e) => {
        var a, x = 0, y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
      }

      glass.style.backgroundImage = "url('" + img.src + "')";
      glass.style.backgroundRepeat = "no-repeat";
      glass.style.backgroundSize = (img.width * 3) + "px " + (img.height * 3) + "px";
      bw = 3;
      w = glass.offsetWidth / 2;
      h = glass.offsetHeight / 2;
      glass.addEventListener("mousemove", moveMagnifier);
      img.addEventListener("mousemove", moveMagnifier);
      glass.addEventListener("touchmove", moveMagnifier);
      img.addEventListener("touchmove", moveMagnifier);
    }
    run("img", 3)
  }
}