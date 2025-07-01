import { Laptop, Shield, Users, Speaker, Handshake, Lightbulb, Zap, Eye, ArrowUpCircle, Target } from "lucide-react";
import go from "@/assets/images/go.png"
import r1 from "@/assets/images/r1.png"
import r2 from "@/assets/images/r2.png"
import ts from "@/assets/images/typescript.png"
import js from "@/assets/images/js.png"
import next from "@/assets/images/next.jpg"
import node from "@/assets/images/nodejs.png"
import mysql from "@/assets/images/mysql.png"
import sql from "@/assets/images/sql-server.png"
import postgres from "@/assets/images/postgre.png"
import { StaticImageData } from "next/image";
export const skillsets :{id:number, label:string, value:string, desc:{id:number, img?:string | StaticImageData, icon?:React.ReactNode,name:string}[]}[] = [
    {
        id: 1,
        label: "Perks and Abilities",
        value: "abilities",
        desc: [
          { id: 0, icon: <Laptop />, name: "Multitasking" },
          { id: 1, icon: <Shield />, name: "Adaptability" },
          { id: 2, icon: <Users />, name: "Collaborative Team Player" },
          { id: 3, icon: <Speaker />, name: "Effective Communication" },
          { id: 4, icon: <Handshake />, name: "Team Leadership" },
          { id: 5, icon: <Lightbulb />, name: "Mentorship & Guidance" },
          { id: 6, icon: <Zap />, name: "Creative Problem Solving" },
          { id: 7, icon: <Eye />, name: "Attention to Detail" },
          { id: 8, icon: <ArrowUpCircle />, name: "Proactive Mindset" },
          { id: 9, icon: <Target />, name: "Resilience Under Pressure" }
        ]
      },
    {
        id: 0,
        label: "Programming Languages",
        value: "html",
        desc: [
            { id: 0, img: node, name: 'Node' },
            { id: 2, img: ts, name: "TypeScript", },
            { id: 3, img: r1, name: "React", },
            { id: 5, img: r2, name: "React Native", },
            { id: 7, img: js, name: "Javascript", },
            { id: 8, img: go, name: "go", },
            { id: 14, img: next, name: "Next Js", },
        ]


        //  typescript, react, flutter, native,kotlin, dotnet, figma, ps, laravel, xd, django,angular,andriod,next],

    },


    {
        id: 2,
        label: "Databases",
        value: "vue",
        // desc: [mysql, sql, mongo,postgress,firebase,sqlite],
        desc: [
            { id: 0, img: mysql, name: 'mysql' },
            { id: 1, img: sql, name: "sql", },
            { id: 2, img: sql, name: "mongo", },
            { id: 3, img: postgres, name: "postgress", },
            { id: 4, img: sql, name: "firebase", },
            { id: 5, img: sql, name: "sqlite", },
            { id: 6, img: sql, name: "redis", },

        ]

    },



];