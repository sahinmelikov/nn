let Input=document.querySelector('input');
let Tbody=document.querySelector('.kv2')
let sil=document.querySelector('.sil')

sil.addEventListener('click',function () {
  Tbody.innerHTML=""
    
})



Input.addEventListener('change',function () {
    [...this.files].forEach(file=>{
        let reader=new FileReader();
        reader.onload=function(){


        Tbody.innerHTML+=
        `
       <div class="kvv d-flex flex-column align-items-center ">
      <tr >
        <td><img width="100" height="100" src="${this.result}" alt=""></td>
              
        <td>ADI:${file.name}</td> 
    <button  class="border-0 sil2 bg-danger mt-4">sil</button>
        
      </tr>
      </div>

        `
        let sil2=document.querySelector('.sil2')
        sil2.addEventListener('click',function () {
        this.parentElement.remove()
            
        })
        
        }
        reader.readAsDataURL(file);
    })
    
})