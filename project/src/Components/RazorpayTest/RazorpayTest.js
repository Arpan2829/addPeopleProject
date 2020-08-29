import React, { useState } from 'react';

async function generateOrderId(){
    await axios.post("https://api.razorpay.com/v1/orders",generateOrderIdObject,{
      headers: { 'Authorization': + basicAuth }
    })
    .then(res=>{
      console.log(res.data)
      setOrderId(res.data.id)
      displayRazorpay()
    })
    .catch(err=>{
      setOrderId("")
    })
  }

  
const loadScript=(src)=>{
    return new Promise(resolve=>{
        const script = document.createElement('script')
        script.src = src
        
        script.onload = () =>{
            resolve(true)
        }
        script.onerror = () =>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const DevAPI = document.domain === "localhost"
// if(document.domain==="localhost"){
//     //dev
// }
// else{
//     //Prod
// }

const RazorpayTest =()=>{

    const [name, setName] = useState("Arpan")

    async function displayRazorpay (){
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        
        if(!res){
            alert("Razorpay SDK failed to load. Are you online?")
        }

        const options = {
            "key": DevAPI? "rzp_test_GP7hCrPCLZN5V5" : "API not available for Prod", // Enter the Key ID generated from the Dashboard
            "amount": "500",//100p =1rps // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Testing company",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            //"order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name":name,
                //"email": "gaurav.kumar@example.com",
                //"contact": "9999999999"
            },
            // "notes": {
            //     "address": "Razorpay Corporate Office"
            // },
            // "theme": {
            //     "color": "#F37254"
            // }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    return(
        <div>
            <a
            target="_blank"
            onClick={displayRazorpay}
            >
                Donate 5 Rs
            </a>
        </div>
    )
}

export default RazorpayTest;