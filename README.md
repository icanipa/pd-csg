# PAGER DUTY COSTUMER SUCCESS GROUP

This app manage the everyday labor as a CSG Innovation Team Member to create and manage a successful backend and front-end app.

## Description

This app has the back-end 'pd_back' and front-end 'pd_front' that alow us to manipulate the pagerduty page to manage incidents.

## Getting Started

### Dependencies

* First create an python enviroment (virtualenv, pyenv, conda, etc.)
* Install Node.js `>=16.8` minimum, [latest LTS is recommended](https://nodejs.org/en/about/releases/)
* Install pnpm (for installing npm dependencies, using pnpm workspaces)

### Installing

* First clone pd-csg
```
git clone https://github.com/icanipa/pd-csg
cd pd-csg
```
* configure PYTHONPATH add to  your `~/.bash_profile`
```
PYTHONPATH="$(PWD)/pd-csg:$PYTHONPATH"
```
* Activate your virtualenv
* Install dependencies
```
pip install -r requirements.txt
```

### Installing front-end

* install all node packages
```
cd pd_front
pnpm i
```

### Migrate PagerDuty 

*  Migrate all services from `pdt-rcaicedopd` instance to `ignacios` instance in pd-csg
```
python migrate.py
```

### Executing program

* First start back-end in `cd pd-csg`
```
python pd_back/app.py
```

* Run frond-end in cd pd-csg
```
cd pd_front
pnpm run dev
```

* Once back and frond are up and running, entre url to verify is working.
```
http://127.0.0.1:6969/
```

### Run back-end test

* To run backend test just run this command in pd-csg
```
pytest
```

## Help

Any advise for common problems or issues.
```
please email  ignaciocanipa@gmail.com
```

## Authors

Contributors names and contact info

Ignacio Canipa
