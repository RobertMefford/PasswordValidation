import { useState } from 'react';
import { validatePassword } from './PasswordValidate';

import {
    Button,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

const SiginForm = () => {

    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");
    const [matched, setMatched] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        const errors = validatePassword(password);
        setError(errors);
        if (password !== confirmPass) setMatched(false);
        else setMatched(true);
    }

    return (
        <>
            <h2>Password Validation</h2>
            <Form className="form" onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        placeholder="******"
                        value={password}
                        valid={error === "" && password !== ""}
                        invalid={error.length}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormFeedback>
                        {error}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Confirm Password</Label>
                    <Input
                        type="password"
                        placeholder="Retype password"
                        value={confirmPass}
                        valid={matched && confirmPass !== ""}
                        invalid={!matched}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    <FormFeedback>
                        Passwords must match
                    </FormFeedback>
                </FormGroup>
                <Button color='success'>Submit</Button>
            </Form>
        </>
    )
};

export default SiginForm;