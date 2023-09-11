import React from 'react'

function StatucLayout({children}) {
  return (
    <>
    <div className="min-h-screen overflow-hidden bg-cover" style={{backgroundImage: 'url("https://fondosmil.com/fondo/10829.jpg")'}}>
    {children}
    </div>
    </>
  )
}

export default StatucLayout