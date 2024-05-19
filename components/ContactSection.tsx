import { contactList } from '@/constants'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  const hoverLink = () => {
    return
  }

  return (
    <section id="section" className="pt-10">
        
        <h2 className="text-2xl font-medium pb-4">Connect</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {contactList.map((contact) => (
                <Link key={contact.imgUrl} href={contact.link} >
                  <div className="w-full flex items-center justify-between p-3 border-none rounded-lg bg-gray-50">
                      <div className="flex gap-4 items-center">
                        <Image 
                            src={contact.imgUrl}
                            alt="avatar" 
                            width={32}
                            height={32}
                        />
                        <p>{contact.label}</p>
                      </div>
                      <div>
                        <ArrowUpRight />
                      </div>
                  </div>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default ContactSection