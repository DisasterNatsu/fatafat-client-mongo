interface NavDataType {
  heading: string;
  link: string;
  icon: any;
}

interface TablePropType {
  heading?: boolean;
  data?: any;
}

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (state: boolean) => void;
  isAuth: boolean;
  setIsAuth: (state: boolean) => void;
}

interface DateFormatterProps {
  current: boolean;
  date?: string;
}

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
    status: number;
    statusText: string;
  };
}

interface UserLogInResponse {
  authToken: string;
  email: string;
}

interface UserAuthResponse {
  authenticated: boolean;
  user?: {
    email: string;
    exp: number;
    iat: number;
  };
  error: any;
}

interface UserDropdownProps {
  isAuth: boolean;
  setIsAuth: (boolean) => void;
}

interface LatestUpdateDataType {
  _id: string;
  date: string;
  data: dataArray[];
  __v: number;
  createdAt: string;
}

interface dataArray {
  index: number;
  gameResultPatti: number;
  gameNumber: number;
  _id: string;
}

interface RepeatPattiTypeSub {
  index: number;
  patti: string;
  _id: string;
}

interface RepeatPattiType {
  _id: string;
  repeatPatti: RepeatPattiTypeSub[];
  __v: number;
}

interface tip {
  index: number;
  tip: string;
  _id: string;
}

interface TipData {
  _id: string;
  date: string;
  tips: tip[];
  __v: 28;
}

interface MessageDataType {
  _id: string;
  heading: string;
  __v: number;
  message?: string;
}

interface VipTipsData {
  amount: number;
  link: string;
}
