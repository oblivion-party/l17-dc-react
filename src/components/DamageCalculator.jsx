import React, { useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";

function calculate_damage(lvl, attack, defense, base, stab, efficiency, other) {
    const damage_base = ((2*lvl+10)/250 * attack/defense * base + 2) * stab * efficiency * other
    const min_damage = (damage_base * 0.85).toFixed(1)
    const max_damage = (damage_base).toFixed(1)
    const min_crit = (min_damage * 1.5).toFixed(1)
    const max_crit = (max_damage * 1.5).toFixed(1)
    console.log(lvl, attack, defense, base, stab, efficiency, other)
    console.log(min_damage, max_damage, min_crit, max_crit)
    return [min_damage, max_damage, min_crit, max_crit]
}

function DamageCalculator(props) {
    const [min_damage, setMinDamage] = useState(0);
    const [max_damage, setMaxDamage] = useState(0);
    const [min_crit, setMinCrit] = useState(0);
    const [max_crit, setMaxCrit] = useState(0);


    const [lvl, setLvl] = useState(100);
    const [attack, setAttack] = useState(300);
    const [defense, setDefense] = useState(300);
    const [base, setBase] = useState(50);
    const [stab, setStab] = useState(1);
    const [efficiency, setEfficiency] = useState(1);
    const [other, setOther] = useState(1);

    const get_value = (str) => {
        return parseFloat(str.split(" ")[0])
    }

    const lvlChangeHandler = (event) => {
        const new_lvl = get_value(event.target.value)
        const dmg = calculate_damage(new_lvl, parseFloat(attack), parseFloat(defense), parseFloat(base), parseFloat(stab), parseFloat(efficiency), parseFloat(other))
        setLvl(new_lvl)
        setMinDamage(dmg[0])
        setMaxDamage(dmg[1])
        setMinCrit(dmg[2])
        setMaxCrit(dmg[3])
    };

    const attackChangeHandler = (event) => {
        const new_attack = get_value(event.target.value)
        const dmg = calculate_damage(parseFloat(lvl), new_attack, parseFloat(defense), parseFloat(base), parseFloat(stab), parseFloat(efficiency), parseFloat(other))
        setAttack(new_attack)
        setMinDamage(dmg[0])
        setMaxDamage(dmg[1])
        setMinCrit(dmg[2])
        setMaxCrit(dmg[3])
    };

    const defenseChangeHandler = (event) => {
        const new_defense = get_value(event.target.value)
        const dmg = calculate_damage(parseFloat(lvl), parseFloat(attack), new_defense, parseFloat(base), parseFloat(stab), parseFloat(efficiency), parseFloat(other))
        setDefense(new_defense)
        setMinDamage(dmg[0])
        setMaxDamage(dmg[1])
        setMinCrit(dmg[2])
        setMaxCrit(dmg[3])
    };
    const baseChangeHandler = (event) => {
        const new_base = get_value(event.target.value)
        const dmg = calculate_damage(parseFloat(lvl), parseFloat(attack), parseFloat(defense), new_base, parseFloat(stab), parseFloat(efficiency), parseFloat(other))
        setBase(new_base)
        setMinDamage(dmg[0])
        setMaxDamage(dmg[1])
        setMinCrit(dmg[2])
        setMaxCrit(dmg[3])
    };
    const stabChangeHandler = (event) => {
        const new_stab = get_value(event.target.value)
        const dmg = calculate_damage(parseFloat(lvl), parseFloat(attack), parseFloat(defense), parseFloat(base), new_stab, parseFloat(efficiency), parseFloat(other))
        setStab(new_stab)
        setMinDamage(dmg[0])
        setMaxDamage(dmg[1])
        setMinCrit(dmg[2])
        setMaxCrit(dmg[3])
    };
    const efficiencyChangeHandler = (event) => {
        const new_efficiency = get_value(event.target.value)
        const dmg = calculate_damage(parseFloat(lvl), parseFloat(attack), parseFloat(defense), parseFloat(base), parseFloat(stab), new_efficiency, parseFloat(other))
        setEfficiency(new_efficiency)
        setMinDamage(dmg[0])
        setMaxDamage(dmg[1])
        setMinCrit(dmg[2])
        setMaxCrit(dmg[3])
    };
    const otherChangeHandler = (event) => {
        const new_other = get_value(event.target.value)
        const dmg = calculate_damage(parseFloat(lvl), parseFloat(attack), parseFloat(defense), parseFloat(base), parseFloat(stab), new_other)
        setOther(new_other)
        setMinDamage(dmg[0])
        setMaxDamage(dmg[1])
        setMinCrit(dmg[2])
        setMaxCrit(dmg[3])
    };

    return (
        <Container>
            <Box sx={{maxWidth: 600}}>
                <Typography variant="h5">Калькулятор урона</Typography>
                <TextField label="Уровень" defaultValue={lvl.toString()} size="small" margin="dense" onChange={lvlChangeHandler}/>
                <TextField label="Атака" defaultValue={attack.toString()} size="small" margin="dense" onChange={attackChangeHandler}/>
                <TextField label="Защита" defaultValue={defense.toString()} size="small" margin="dense" onChange={defenseChangeHandler}/>
                <TextField label="Мощность" defaultValue={base.toString()} size="small" margin="dense" onChange={baseChangeHandler}/>
                <TextField label="Стаб" defaultValue={stab.toString()} size="small" margin="dense" onChange={stabChangeHandler}/>
                <TextField label="Эффективность" defaultValue={efficiency.toString()} size="small" margin="dense" onChange={efficiencyChangeHandler}/>
                <TextField label="Дополнительный множитель" defaultValue={other.toString()} size="small" margin="dense" onChange={otherChangeHandler}/>

                <Typography>{`${min_damage.toString()} - ${max_damage.toString()} (${min_crit.toString()} - ${max_crit.toString()})`}</Typography>
            </Box>
        </Container>
    )
}


export default DamageCalculator;