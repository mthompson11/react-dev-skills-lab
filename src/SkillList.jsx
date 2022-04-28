import SkillListItem from './SkillListItem'
import './App.css'

export default function SkillList({ skills }){
    return (
        <ul className="padding-0">
            { skills.map((skill, idx) => <SkillListItem skill={skill} key={idx} />) }
        </ul>
    );
};