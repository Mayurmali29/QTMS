import { Menu } from "./menu.model";

export const verticalMenuItems = [
  //new Menu (40, 'Pages', null, null, 'library_books', null, true, 0),
  //new Menu (43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
  //new Menu (44, 'Register', '/register', null, 'person_add', null, false, 40),

  new Menu(260, "Dashboard", null, null, "dashboard", null, true, 0),
  // new Menu (261, 'School', '/admin/school', null, 'account_balance', null, false, 260),
  // new Menu (262, 'Course list', '/admin/courselist', null, 'assignment', null, false, 260),
  // new Menu (263, 'Teacher list', '/admin/teacherlist', null, 'person', null, false, 260),
  // new Menu (264, 'Student list', '/admin/studentlist', null, 'face', null, false, 260),
  // new Menu (265, 'Manage scenes', '/admin/managescenes', null, 'landscape', null, false, 260),
  // new Menu (266, 'Assign scene to course', '/admin/assignscene', null, 'fact_check', null, false, 260),

  new Menu(270, "Master", null, null, "account_circle", null, true, 0),
  new Menu(
    271,
    "Test Type Master",
    "/master/typemaster",
    null,
    "library_books",
    null,
    false,
    270
  ),
  new Menu(
    272,
    "Test Parameter Master",
    "/master/parametermaster",
    null,
    "library_books",
    null,
    false,
    270
  ),
  new Menu(
    273,
    "FG Family Master",
    "/master/familymaster",
    null,
    "library_books",
    null,
    false,
    270
  ),
  new Menu(
    274,
    "FG Packaging Family",
    "/master/packagingmaster",
    null,
    "library_books",
    null,
    false,
    270
  ),
  new Menu(
    275,
    "FG Master",
    "/master/fgmaster",
    null,
    "library_books",
    null,
    false,
    270
  ),
  new Menu(
    275,
    "FG Test Parameter Master",
    "/master/fgtestparametermaster",
    null,
    "library_books",
    null,
    false,
    270
  ),
  new Menu(
    275,
    "FG Test transaction",
    "/master/fgtesttransaction",
    null,
    "library_books",
    null,
    false,
    270
  ),
];
