import './index.css';

const Resumes = () => {
    return(
 <div className='team-section'>
     <h2 className='team'>Our Team</h2>

 <div className='our-team'>
   <div className='images'>
     <div >
        <img src= "/imagesC/Faith.jpg" alt='member-one' id='fay'/>
      <div className='caption'>
         <h5>Faith Munyao</h5>
         <p><a href='https://faith-s-portfolio-5951fte3h-ada-lab.vercel.app/' className='software'> Software Developer</a></p>
        </div>
        </div>
  <div>
    <img src="/imagesC/jango.jpg" alt='member-two' id='mauren'/>
       <div className='caption'>
          <h5>Maureen Njango</h5>
          <p><a href='https://trialcover.vercel.app/' className='software'> Software Developer</a></p>
        </div>
        </div>

  <div>
    <img src="/imagesC/Megan.png" alt='member-three' id='adhiambo'/>
    <div className='caption'>
       <h5>Megan Adhiambo</h5>
        <p><a href='https://portfolio-n4vj3ow0x-megan-otienos-projects.vercel.app/' className='software'>Software Developer</a></p>

        </div>
        </div>
    </div>

  <div className='image-bottom'>
     <div>
        <img src='/imagesC/Loice.png'alt='member-four' id='staice'/>
     <div className='caption'>
       <h5>Loice Staice</h5>
      <p> <a href ='https://www.freepik.com/designer/edit?template=9c7fb692-0334-4259-a9a8-312c14cb9d74' className='software'>Software Developer</a></p>
         <p></p>
            </div>
           </div>

   <div>
     <img src='/imagesC/Cynthia.png' alt='member-five' id='nthenya'/>
        <div className='caption'>
         <h5>Cynthia Nthenya</h5>
            <p>Software Developer</p>
        </div>
        </div>
        </div>
        </div>
        </div>
      
    )
}

export default Resumes;










        
    