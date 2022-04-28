import { useState } from 'react'

export default function NewSkillForm({ addSkill }){
    const [newSkill, setNewSkill] = useState({
        name: '',
        level: 3
    });

    function handleChange(evt){
        const newerSkill = { ...newSkill, [evt.target.name] : evt.target.value};
        setNewSkill(newerSkill);
    };

    function handleNewSkill(evt){
        evt.preventDefault();
        addSkill(newSkill);
        setNewSkill({
            name: '',
            level: 3
        });
    };

    return(
        <form className="NewSkillForm" onSubmit={handleNewSkill}>
            <label>Skill</label>
            <input name="name" value={newSkill.name} onChange={handleChange}/>
            <label>Level</label>
            <select name="level" value={newSkill.level} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
      </form>
    );
};