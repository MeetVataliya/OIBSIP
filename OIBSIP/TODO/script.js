let pending = []
let complet = []
let input = document.getElementById("input")
var pends = document.getElementById("pendings")
var cont = document.getElementById("cov")

function  Addtodo() {
    
    let value =  input.value
    if(value !=""){
    pending.push(String(value))
    
    pends.innerHTML= ' ';   
    for(var i = 0;i <pending.length;i++)
    {
        var text = pending[i]
        var init = document.createElement('input');
        init.className="one"
        init.type = 'text';
        init.id=i;
        init.value = text;
        // input.id = `input_${inde; // Assign a unique ID

        var button = document.createElement('button');
        // var fxn = edit() 
        button.textContent="edit"
        button.className="edit"
        button.value=i;
        button.onclick = edit;

        var delet = document.createElement('button');
        delet.textContent="delete"
        delet.className="delete"
        delet.value=i;
        delet.onclick = del;

        var compl = document.createElement('button');
        compl.textContent="complete"
        compl.className="complete"
        compl.value=i;
        compl.onclick = complete;


        // var br = document.createElement('br');



        // console.log(pending[i]) 
        pends.appendChild(init)
        pends.appendChild(compl)
        pends.appendChild(button)
        pends.appendChild(delet)
        pends.appendChild(document.createElement('br'))
        // pends.insertAdjacentHTML("beforeend", html);
    }
}
    input.value=""
}










function  edit() {
    let value = this.value;
    console.log(pending)
    ininput = document.getElementById(value)
    pending[value]=ininput.value

    console.log(pending)
    pends.innerHTML= ' ';   
    for(var i = 0;i <pending.length;i++)
    {
        text = pending[i]
        
        
        var init = document.createElement('input');
        init.type = 'text';
        init.className="one"
        init.value = text;
        init.id=i;

        // input.id = `input_${index}`; // Assign a unique ID

        var button = document.createElement('button');
        button.textContent="edit"
        button.className="edit"
        button.value=i;
        button.onclick = edit;

        var delet = document.createElement('button');
        delet.textContent="delete"
        delet.className="delete"
        delet.value=i;
        delet.onclick = del;

        var compl = document.createElement('button');
        compl.textContent="complete"
        compl.className="complete"
        compl.value=i;
        compl.onclick = complete;


        var br = document.createElement('br');



        // console.log(pending[i]) 
        pends.appendChild(init)
        pends.appendChild(compl)
        pends.appendChild(button)   
        pends.appendChild(delet)
        pends.appendChild(document.createElement('br'))
        // pends.insertAdjacentHTML("beforeend", html);
    }
    input.value=""
}






function  del() {


    let value = Number(this.value);

    console.log(pending)
    if(value==0)
    {
        pending.splice(0,1)
    }
    else{
        pending.splice(value,value)
    }

    console.log(pending)
    pends.innerHTML= ' ';   


    for(var i = 0;i <pending.length;i++)
    {
        text = pending[i]
        console.log(pending[i])
        
        var init = document.createElement('input');
        init.type = 'text';
        init.className="one"
        init.value = text;
        init.id=i;
        // input.id = `input_${index}`; // Assign a unique ID

        var button = document.createElement('button');
        button.textContent="edit"
        button.className="edit"
        button.value=i;
        button.onclick = edit;

        var delet = document.createElement('button');
        delet.textContent="delete"
        delet.className="delete"
        delet.value=i;
        delet.onclick = del;

        var compl = document.createElement('button');
        compl.textContent="complete"
        compl.className="complete"
        compl.value=i;
        compl.onclick = complete;

 



        // console.log(pending[i]) 
        pends.appendChild(init)
        pends.appendChild(compl)
        pends.appendChild(button)   
        pends.appendChild(delet)
        pends.appendChild(document.createElement('br'))

        // pends.insertAdjacentHTML("beforeend", html)
    }
    input.value=""
}









function  complete() {



    let value = Number(this.value);
    let comp = document.getElementById(value)
    var cron = comp.value
    complet.push(String(cron))


    if(value==0)
    {
        pending.splice(0,1)
    }
    else{
        pending.splice(value,value)
    }

    

    pends.innerHTML= ' ';   
    for(var i = 0;i <pending.length;i++)
    {
        text = pending[i]
        
        var init = document.createElement('input');
        init.type = 'text';
        init.className='one'
        init.value = text;
        init.id=i;
        // input.id = `input_${index}`; // Assign a unique ID

        var button = document.createElement('button');
        button.textContent="edit"
        button.className="edit"
        button.value=i;
        button.onclick = edit;

        var delet = document.createElement('button');
        delet.textContent="delete"
        delet.className="delete"
        delet.value=i;
        delet.onclick = del;


        var compl = document.createElement('button');
        compl.textContent="complete"
        compl.className="complete"
        compl.value=i;
        compl.onclick = complete;






        // console.log(pending[i]) 
        pends.appendChild(init)
        pends.appendChild(compl)
        pends.appendChild(button)   
        pends.appendChild(delet)
        pends.appendChild(document.createElement('br'))

        // pends.insertAdjacentHTML("beforeend", html);
    }



    cont.innerHTML=' ';   
    console.log(complet)
    for(var i = 0;i <complet.length;i++)
    {
        text = complet[i]
        console.log(complet[i])

        
        var init = document.createElement('input');
        init.className='wow'
        init.type = 'text';
        init.value = text;
        

        var br = document.createElement('br');  

        cont.appendChild(init)
        cont.appendChild(br)
        
    }
}