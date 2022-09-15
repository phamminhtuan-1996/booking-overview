export type DataLogin = {
    UserName: string,
    PassWord: string,
}
export type ProfileUser = {
    FullName: string,
    Avatar: string,
    FirstName: string,
    LastName: string,
    Aliases: string,
    Greeting: string
    Birthday: string,
    SexCode: string,
    PhoneNumber: string,
    Fax: string,
    Email: string,
    NationalityID: string,
    ZIPCode: string,
    State: string,
    Citizen: string, 
    Address: string,
    Address1: string,
    Passport: string,
    Visa: string,
    ReleaseDateVisa: string,
    CardIssuerVisa: string,
    IdentityCard: string,
    ReleaseDateIdentity: string,
    CardIssuerIdentity: string,
    CompanyId: string,
    Job: string,
    Position: string,
    Note: string,
    City: string,
}



export type Country = {
    id:           number;
    name:         string;
    country_id:   number;
    country_code: string;
    country_name: string;
    state_code:   string;
    type:         null;
    latitude:     string;
    longitude:    string;
}

export type ValuePickCountry = {
    label: string,
    data: Country
}

export type States = {
    id:           number;
    name:         string;
    country_id:   number;
    country_code: string;
    country_name: string;
    state_code:   string;
    type:         null;
    latitude:     string;
    longitude:    string;
}

export type ValuePickStates = {
    label: string,
    data: States
}

export type Course = {
    Id:                         number;
    SiteId:                     string;
    CourseCode:                 string;
    CourseName:                 string;
    NumberOfHoles:              number;
    Color:                      string;
    InternalCustomerManagement: string;
    HotelId:                    string;
    CreateBy:                   string;
    CreateDate:                 Date;
    UpdateBy:                   null;
    UpdateDate:                 null;
    InActive:                   boolean;
    IsDeleted:                  boolean;
    SynDate:                    null;
    FlexCol1:                   null;
    FlexCol2:                   null;
    FlexCol3:                   null;
    FlexCol4:                   null;
    FlexCol5:                   null;
}

export type BookingDetailCourse = {
    Id:              number;
    SiteId:          string;
    BookingDetailId: number;
    CourseId:        number;
    NumberOfHole:    number;
    CreateBy:        string;
    CreateDate:      Date;
    UpdateBy:        null;
    UpdateDate:      null;
    InActive:        boolean;
    IsDeleted:       boolean;
    SynDate:         null;
    FlexCol1:        null;
    FlexCol2:        null;
    FlexCol3:        null;
    FlexCol4:        null;
    FlexCol5:        null;
    Course:          Course;
}

export type BookingDetail = {
    CourseName:                    string;
    TotalNumberOfHole:             number;
    StartTime:                     string;
    OpenDate:                      string;
    TeeName:                       string;
    GolfClassColor:                string;
    GolfClassName:                 string;
    RateId:                        number;
    RateName:                      string;
    PackageId:                     null;
    PackageName:                   string;
    CaddyName:                     string;
    CaddyId:                       number;
    CaddyCode:                     string;
    Avatar:                        string;
    FirstName:                     string;
    LastName:                      string;
    FullName:                      string;
    CardCode:                      string;
    PhoneNumber:                   string;
    Email:                         string;
    NationalityCode:               null;
    Note:                          string;
    ClientId:                      null;
    ClientName:                    string;
    SourceId:                      null;
    SourceName:                    string;
    Reason:                        null;
    CardCode4GolfClassRule:        null;
    BDC4GolfClassRule:             null;
    BookingDetailId4GolfClassRule: null;
    TotalPrice:                    string;
    BookingDetailCourse:           BookingDetailCourse[];
    BookingDetailCaddy:            any[];
    Id:                            number;
    BookingId:                     number;
    BookingInfoId:                 number;
    BDC:                           string;
    MemberId:                      number;
    MemberSubscriptionId:          number;
    TeeTimeId:                     number;
    OpenDateTime:                  Date;
    GolfClassId:                   number;
    BagtagCode:                    null;
    LockerCode:                    null;
    BuggyCode:                     null;
    BookingDetailStatus:           string;
    PaymentDetailStatus:           string;
    Line:                          string;
}

export type ValueMemberID = {
    label: string;
    code: number;
}