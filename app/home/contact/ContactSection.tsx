import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { svgs } from '@/constants/svgs'
import { contactList } from './ContactList'

const ContactSection = () => {
  const hoverLink = () => {
    return
  }

  const imageStyle = {
    // filter: 'invert(20%) sepia(100%) saturate(1000%) hue-rotate(90deg) brightness(100%) contrast(97%)',
    filter: 'brightness(0) invert(1)'
  }

  return (
    <section id="section" className="pt-10">
        
        <h2 className="text-2xl font-medium pb-4">Connect</h2>
        <ul className="animated-list grid grid-cols-1 gap-5 sm:grid-cols-2">
            {contactList.map((contact, index) => (
              <Link key={index} href={contact.link}>
                <li className="w-full flex items-center justify-between p-4 border-none rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
                    <div className="flex gap-4 items-center">
                      <span className="text-3xl">{contact.imgUrl}</span>
                      {contact.label}
                    </div>
                    <div>
                      <ArrowUpRight className="text-gray-900 dark:text-gray-300" />
                    </div>
                </li>
              </Link>
            ))}
        </ul>
    </section>
  )
}

export default ContactSection