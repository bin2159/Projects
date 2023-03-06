let form=document.getElementById('form')
form.addEventListener('submit',store)
getData()
async function store(e){
    e.preventDefault()
    let name=document.getElementById('name').value
    let phone=document.getElementById('phone').value
    let email=document.getElementById('email').value
    let myObj={
        name:name,
        phone:phone,
        email:email
    }
    
    try{
        let promise1=await axios.post(`http://localhost:3000/save/post`,myObj)
        console.log('hey')
        let promise=await axios.get('http://localhost:3000/save/get')
        Display(promise.data[promise.data.length-1])
    }
    catch(err){
        console.log(err)
    }
}
async function getData(){ 
    try{
        let promise=await axios.get('http://localhost:3000/save/get')
        for(let i=0;i<promise.data.length;i++){
            Display(promise.data[i])
        }
    }
    catch(err){
        console.log(err)
    }
}
async function findByPk(userId){
    try{
        let promise =await axios.get(`http://localhost:3000/save/find/${userId}`)
        return promise
    }
    catch(err){
        console.log(err)
    }
}
function Display(myObj){
    let parentNode=document.getElementById('user')
    let childHTML=`<li id='${myObj.id}' class ='list'>${myObj.name}-----${myObj.phone}-----${myObj.email}
                    <button id='edit' value='e'>Edit</button><button id='delete' value='d'>Delete</button></li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
    let li=document.getElementsByClassName('list')
    console.log(li)
    for(let i=0;i<li.length;i++)
    {
        li[i].addEventListener('click',edit)

    }
    

}

async function edit(e){
    if(e.target.value=='e'){
        let item=e.target.parentElement
        let userId=item.id
        try{
            let user=await findByPk(userId)
            console.log(user)
            let promise=await axios.delete(`http://localhost:3000/save/del/${userId}`)
            document.getElementById('name').value=user.data.name
            document.getElementById('phone').value=user.data.phone
            document.getElementById('email').value=user.data.email
            let parentElement=document.getElementById('user')
            parentElement.removeChild(item)
        }
        catch(err){
            console.log(err)
        }
    }
    if(e.target.value=='d'){
        let item=e.target.parentElement
        let userId=item.id
        try{
            
            let promise=await axios.delete(`http://localhost:3000/save/del/${userId}`)
            let parentElement=document.getElementById('user')
            parentElement.removeChild(item)
        }
        catch(err){
            console.log(err)
        }    
    }
}