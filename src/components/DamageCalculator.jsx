import React, { useState, useEffect } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";

function calculateDamage(lvl, attack, defense, base, stab, efficiency, other) {
    const damageBase = ((2*lvl+10)/250 * attack/defense * base + 2) * stab * efficiency * other
    const minDamage = (damageBase * 0.85).toFixed(1)
    const maxDamage = (damageBase).toFixed(1)
    const minCritDamage = (minDamage * 1.5).toFixed(1)
    const maxCritDamage = (maxDamage * 1.5).toFixed(1)
    return [minDamage, maxDamage, minCritDamage, maxCritDamage]
}

function DamageCalculator(props) {
    const [damage, setDamage] = useState([0, 0, 0, 0]);

    const [lvl, setLvl] = useState(100);
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [base, setBase] = useState(0);
    const [stab, setStab] = useState(1);
    const [efficiency, setEfficiency] = useState(1);
    const [other, setOther] = useState(1);

    const getValue = (str) => {
        return parseFloat(str.split(" ")[0])
    }

    useEffect(() => {
        setDamage(calculateDamage(lvl, attack, defense, base, stab, efficiency, other))
    }, [lvl, attack, defense, base, stab, efficiency, other])

    return (
        <Container>
            <Box sx={{maxWidth: 600}}>
                <Typography variant="h5">Калькулятор урона</Typography>
                <TextField
                    label="Уровень"
                    defaultValue={ lvl.toString() }
                    size="small"
                    margin="dense"
                    onChange= {
                        (event) => {
                            setLvl(getValue(event.target.value))
                        }
                    }
                />
                <TextField
                    label="Атака"
                    defaultValue={ attack.toString() }
                    size="small"
                    margin="dense"
                    autoFocus={true}
                    onChange ={
                        (event) => {
                            setAttack(getValue(event.target.value))
                        }
                    }
                />
                <TextField
                    label="Защита"
                    defaultValue={ defense.toString() }
                    size="small"
                    margin="dense"
                    onChange={
                        (event) => {
                            setDefense(getValue(event.target.value))
                        }
                    }
                />
                <TextField
                    label="Мощность"
                    defaultValue={ base.toString() }
                    size="small"
                    margin="dense"
                    onChange={
                        (event) => {
                            setBase(getValue(event.target.value))
                        }
                    }
                />
                <TextField
                    label="Стаб"
                    defaultValue={ stab.toString() }
                    size="small"
                    margin="dense"
                    onChange={
                        (event) => {
                            setStab(getValue(event.target.value))
                        }
                    }
                />
                <TextField
                    label="Эффективность"
                    defaultValue={ efficiency.toString() }
                    size="small"
                    margin="dense"
                    onChange={
                        (event) => {
                            setEfficiency(getValue(event.target.value))
                        }
                    }
                />
                <TextField
                    label="Дополнительный множитель"
                    defaultValue={other.toString()}
                    size="small"
                    margin="dense"
                    onChange={
                        (event) => {
                            setOther(getValue(event.target.value))
                        }
                    }
                />

                <Typography>
                    {`${damage[0].toString()} - ${damage[1].toString()} (${damage[2].toString()} - ${damage[3].toString()})`}
                </Typography>
            </Box>
        </Container>
    )
}

export default DamageCalculator;
