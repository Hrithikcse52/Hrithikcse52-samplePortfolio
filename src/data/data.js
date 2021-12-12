import { FaNode, FaPalette, FaReact } from 'react-icons/fa'
import { MdOutlineIntegrationInstructions } from 'react-icons/md'
import { SiExpress, SiGithub, SiHeroku, SiMongodb } from 'react-icons/si'

const BOOTSTRAP_FOR_SKILL_ICON = 'text-4xl mx-auto inline-block'

export const data = {
    name: 'Hrithik Prasad',
    title: 'Full-Stack / Software Developer',
    social: {
        github: 'https://github.com/Hrithikcse52',
        linkedin: 'https://www.linkedin.com/in/hrithikprasad/',
        email: 'hrithik.cse52@gmail.com',
    },
    skills: [
        {
            skillName: 'C/C++',
            skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            skillName: 'Javascript',
            skillIcon: (
                <MdOutlineIntegrationInstructions
                    className={BOOTSTRAP_FOR_SKILL_ICON}
                />
            ),
        }, //SiExpress
        {
            skillName: 'NodeJS',
            skillIcon: <FaNode className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            skillName: 'ReactJS',
            skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            skillName: 'ExpressJS',
            skillIcon: <SiExpress className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            skillName: 'Monogo',
            skillIcon: <SiMongodb className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            skillName: 'Github',
            skillIcon: <SiGithub className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
        {
            skillName: 'Heroku',
            skillIcon: <SiHeroku className={BOOTSTRAP_FOR_SKILL_ICON} />,
        },
    ],
    projects: [
        {
            title: 'Report-Gen',
            description: 'A Report generator app for hospitals',
            tags: ['pdf', 'express.js', 'reactjs', 'node.js'],
            link: 'https://limitless-reaches-88313.herokuapp.com/',
            github: 'https://github.com/Hrithikcse52/ReportGen',
        },
        {
            title: 'Online IDE',
            description: 'A basic online code editor for html,css,js',
            tags: ['react', 'onlineIDE', 'tailwindcss'], //TODO: put image
            link: 'https://onlinewebide.netlify.app/',
            github: 'https://github.com/Hrithikcse52/Code_Runner',
        },
    ],
    education: [
        {
            title: 'RRSDCE, BGS',
            cert: 'B.Tech',
            stream: 'CSE',
            from: '2018',
            to: '2022',
            img: 'https://www.rrsdcebgs.ac.in/wp-content/uploads/2019/07/logo-rrsdce.jpg',
            cur: '8.03 CGPA',
            align: 'R',
        },
        {
            title: 'M.U.Z College, Patna',
            cert: '10+2',
            stream: 'Science',
            from: '2016',
            to: '2018',
            img: 'https://www.rrsdcebgs.ac.in/wp-content/uploads/2019/07/logo-rrsdce.jpg',
            cur: '60%',
            align: 'L',
        },
        {
            title: 'B.J.M High School',
            cert: '10',
            stream: '',

            to: '2016',
            img: '',
            cur: '61%',
            align: 'R',
        },
    ],
}
