#ANGULAR # EsnMagnifierPro

Angular image magnifier without using external library.

---------------------INSTALLATION

     npm i esn-magnifier-pro --force

     import { EsnMagnifierProModule } from 'esn-magnifier-pro';
        

---------------------Demo

        https://stackblitz.com/edit/esn-magnifier-pro

  	    https://esn-magnifier-pro.stackblitz.io

        https://npmjs.com/angular-image-magnifier

![demo](https://user-images.githubusercontent.com/47683843/232458949-be4e7f00-d0e6-4c2e-9630-928f7ee54f9c.png)




---------------------Usage

--------------------TS


        imgUrl="https://www.cdc.gov/healthequity/features/girls/images/iStock-827007798-large.jpg?_=43281"

        option={
            width:'300px',
            height:'300px',
        }

--------------------HTML

        <esn-magnifier-pro 
            [imgUrl]="imgUrl" 
            [option]="option"
            >
            
        </esn-magnifier-pro>




