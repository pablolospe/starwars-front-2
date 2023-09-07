import React from 'react'

function StatucLayout({children}) {
  return (
    <>
    <div className="max-h-screen p-6 bg-cover" style={{backgroundImage: 'url("https://fondosmil.com/fondo/10829.jpg")'}}>
    {children}
    </div>
    </>
  )
}

export default StatucLayout