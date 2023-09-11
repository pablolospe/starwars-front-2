import React from 'react'

function StaticLayout({children}) {
  return (
    <>
   <div
      className="h-screen bg-cover"
      style={{
        backgroundImage: 'url("https://fondosmil.com/fondo/10829.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >    
    {children}
    </div>
    </>
  )
}

export default StaticLayout