import {
    Alert,
    Avatar,
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    IconButton,
    Link,
    Paper,
    Snackbar,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Lightbulb, Person} from "@mui/icons-material";
import {MouseEventHandler, ReactNode, useState} from "react";
import {
    AnonymousEventHandler,
    DefaultProps, expandAllKeys,
    PropsWithChildren,
    PropsWithOpen,
    PropsWithStatus
} from "./types";

export function Center(props: PropsWithChildren): ReactNode {
    return (
        <Box width={1} display="flex" flexDirection="column" alignItems="center" {...props}>
            {props.children}
        </Box>
    );
}

export function Column(props: { children: Iterable<ReactNode> }): ReactNode {
    const [...children] = props.children;
    return (
        <Stack direction="row" alignItems="center" {...props}>
            {children.slice(0, -1)}
            <Box flexGrow={1}/>
            {children.at(-1)}
        </Stack>
    );
}

export function Copyright(props: { companyName: string, startYear: string } & DefaultProps): ReactNode {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...expandAllKeys(props)}>
            Powered by <Link href="https://athena2.atatctech.com" color="inherit" underline="hover">Athena2</Link>.
            Copyright © {props.startYear} - {new Date().getFullYear()} {props.companyName} All rights reserved.
        </Typography>
    );
}

export function ErrorHint(props: PropsWithStatus): ReactNode | null {
    return (
        props.status != null && props.status.length > 2 ?
            <Alert severity="error" sx={{mt: -2, mb: 2}}>{props.status.substring(2)}</Alert> : null
    );
}

export function StatusSnackbar(props: { clearStatus: AnonymousEventHandler } & PropsWithStatus): ReactNode {
    return (
        <Snackbar
            open={props.status != null && props.status.length > 2 && (props.status.startsWith("s/") || props.status.startsWith("i/") || props.status.startsWith("f/"))}
            autoHideDuration={3000} onClose={props.clearStatus}>
            <Alert onClose={props.clearStatus}
                   severity={props.status.startsWith("f/") ? "error" : props.status.startsWith("i/") ? "info" : "success"}
                   sx={{width: '100%'}}>
                {props.status.substring(2)}
            </Alert>
        </Snackbar>
    );
}

export function LoadingBackdrop(props: PropsWithOpen): ReactNode {
    return (
        <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                  open={props.open}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
}

export function PaperAtCenter(props: PropsWithChildren): ReactNode {
    return (
        <Grid width={1} minHeight="100vh" display="flex" flexDirection="column" justifyContent="center"
              alignItems="center">
            <Paper elevation={16} sx={{
                width: {xs: 0.95, sm: 0.6, md: 0.5, lg: 0.4},
                px: 4,
                py: 8,
                display: "flex",
                alignItems: "center"
            }}>
                {props.children}
            </Paper>
        </Grid>
    );
}

export function MainContainer(props: PropsWithChildren): ReactNode {
    return (
        <Container component="main">
            <Box marginTop={2} display="flex" flexDirection="column" alignItems="center">
                {props.children}
            </Box>
        </Container>
    );
}

export function ConfirmDialog(props: {
    passcode: string,
    and: AnonymousEventHandler,
    notice?: string
} & PropsWithChildren): ReactNode {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    return (
        <Box>
            <Dialog open={open}>
                <DialogTitle>Confirm to Proceed</DialogTitle>
                <DialogContent>
                    {
                        props.notice == null ? null :
                            <Alert severity="warning" sx={{mb: 1}}>{props.notice}</Alert>
                    }
                    <DialogContentText>Type in <b>{props.passcode}</b> to proceed.</DialogContentText>
                    <TextField required autoFocus fullWidth type="text" placeholder={props.passcode} onChange={(e) => {
                        setDisabled(e.target?.value !== props.passcode);
                    }} sx={{mt: 1}}/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" disabled={disabled} onClick={() => {
                        props.and();
                        setOpen(false);
                    }}>Confirm</Button>
                    <Button onClick={() => {
                        setOpen(false);
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
            <Box onClick={() => {
                setOpen(true);
            }}>
                {props.children}
            </Box>
        </Box>
    );
}

export function Profile(props: { username: string, profile: string, onClick?: MouseEventHandler }): ReactNode {
    return (
        props.username == null || props.username.length < 0 ?
            <Person onClick={props.onClick}/> :
            <Avatar src={props.profile} onClick={props.onClick}>
                {props.username[0]}
            </Avatar>
    );
}

export function InstructionDialog(props: DefaultProps): ReactNode {
    const [open, setOpen] = useState(false);
    return (
        <Box {...expandAllKeys(props)}>
            <Dialog open={open}>
                {props.children}
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false);
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
            <IconButton size="small" onClick={() => {
                setOpen(true);
            }}>
                <Lightbulb/>
            </IconButton>
        </Box>
    );
}
