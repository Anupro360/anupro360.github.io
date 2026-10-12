const SUPABASE_URL = 'https://dwqhbsczmrlnqipvvjeb.supabase.co';
const SUPABASE_ANON = 'sb_publishable_3bEuZraEw8_zybY2jMc5Jw_xrO-vbCk';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

let currentMonth = '10';
const SHIFTS_DATABASE = {
  "10": {"7101": {"1": "T", "2": "T", "3": "L", "4": "T", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "L", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "L", "18": "T", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "L", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "L"}, "7123": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T", "31": "T"}, "7105": {"1": "T", "2": "L", "3": "T", "4": "T", "5": "T", "6": "T", "7": "T", "8": "T", "9": "L", "10": "T", "11": "T", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "L", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "L", "31": "T"}, "7106": {"1": "T", "2": "T", "3": "L", "4": "T", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "L", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "L", "18": "T", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "L", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "L"}, "7109": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "L", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "L", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "L", "29": "T", "30": "T", "31": "T"}, "7113": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "L", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "L", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "T", "19": "L", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "L", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "7114": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "L", "14": "T", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "L", "28": "T", "29": "T", "30": "T", "31": "T"}, "7102": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "T", "12": "T", "13": "L", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "T", "26": "T", "27": "L", "28": "T", "29": "T", "30": "T", "31": "T"}, "7103": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "L", "8": "T", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "L", "22": "T", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "L", "29": "T", "30": "T", "31": "T"}, "7107": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "L", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "T", "12": "L", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "L", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "T", "26": "L", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "7110": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T", "31": "T"}, "7111": {"1": "T", "2": "L", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "L", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "L", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "L", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "L", "31": "T"}, "7112": {"1": "T", "2": "T", "3": "L", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "L", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "L", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "L", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "L"}, "7115": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "L", "8": "T", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "L", "22": "T", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "L", "29": "T", "30": "T", "31": "T"}, "7122": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T", "31": "T"}, "7104": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "7116": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "L", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "L", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T", "31": "T"}, "7117": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "7118": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "L", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "L", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "L", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T", "31": "T"}, "7121": {"1": "T", "2": "L", "3": "T", "4": "T", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "L", "31": "T"}, "7119": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "L", "18": "T", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "7120": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "L", "8": "T", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "L", "22": "T", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "L", "29": "T", "30": "T", "31": "T"}, "1573": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "L", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "L", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "T", "19": "L", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "L", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "2377": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "L", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "L", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "T", "19": "L", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "L", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "6816": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "L", "14": "T", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "L", "28": "T", "29": "T", "30": "T", "31": "T"}, "4885": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "L", "14": "T", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "L", "28": "T", "29": "T", "30": "T", "31": "T"}, "1260": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "L", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "L", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "L", "29": "T", "30": "T", "31": "T"}, "2486": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "L", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "L", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "L", "29": "T", "30": "T", "31": "T"}, "8220": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T", "31": "T"}, "2130": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T", "31": "T"}, "2914": {"1": "T", "2": "L", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "L", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "L", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "L", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "L", "31": "T"}, "1122": {"1": "T", "2": "L", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "L", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "L", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "L", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "L", "31": "T"}, "8607": {"1": "T", "2": "T", "3": "L", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "L", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "L", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "L", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "L"}, "2616": {"1": "T", "2": "T", "3": "L", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "L", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "L", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "L", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "L"}, "3442": {"1": "T", "2": "T", "3": "L", "4": "T", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "L", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "L", "18": "T", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "L", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "L"}, "9262": {"1": "T", "2": "L", "3": "T", "4": "T", "5": "T", "6": "T", "7": "T", "8": "T", "9": "L", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "L", "18": "T", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "L", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "L", "31": "T"}, "4602": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T", "31": "T"}, "2502": {"1": "T", "2": "L", "3": "T", "4": "T", "5": "T", "6": "T", "7": "T", "8": "T", "9": "L", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "L", "17": "T", "18": "T", "19": "T", "20": "T", "21": "T", "22": "T", "23": "L", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "L", "31": "T"}, "4010": {"1": "T", "2": "T", "3": "L", "4": "T", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "L", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "L", "18": "T", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "L", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "L"}, "1506": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "L", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "T", "12": "L", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "L", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "T", "26": "L", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "6680": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "L", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "T", "12": "L", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "L", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "T", "26": "L", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "8994": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "T", "12": "T", "13": "L", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "T", "26": "T", "27": "L", "28": "T", "29": "T", "30": "T", "31": "T"}, "2466": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "T", "12": "T", "13": "L", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "T", "26": "T", "27": "L", "28": "T", "29": "T", "30": "T", "31": "T"}, "1240": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "L", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "L", "17": "T", "18": "T", "19": "T", "20": "T", "21": "L", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "L", "29": "T", "30": "T", "31": "T"}, "8946": {"1": "T", "2": "L", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "L", "10": "T", "11": "T", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "L", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "L", "31": "T"}, "5976": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "2040": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "2063": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "9889": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "8909": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "3001": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "3002": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}, "3003": {"1": "T", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T", "31": "T"}},
  "11": {"7101": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "DC", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "DC", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "L", "29": "T", "30": "T"}, "7123": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "DC", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "T", "12": "L", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "T", "19": "DC", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "L", "27": "T", "28": "T", "29": "T", "30": "T"}, "7105": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "DC", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "DC", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T"}, "7106": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "DC", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "L", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "DC", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "L", "29": "T", "30": "T"}, "7108": {"1": "T", "2": "T", "3": "DC", "4": "T", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "L", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "DC", "18": "T", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "L", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T"}, "7109": {"1": "T", "2": "T", "3": "T", "4": "DC", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "L", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "T", "18": "DC", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "L", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T"}, "7113": {"1": "T", "2": "DC", "3": "T", "4": "T", "5": "T", "6": "T", "7": "T", "8": "L", "9": "L", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "DC", "17": "T", "18": "T", "19": "T", "20": "T", "21": "T", "22": "L", "23": "L", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "DC"}, "7114": {"1": "T", "2": "T", "3": "DC", "4": "T", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "L", "11": "T", "12": "T", "13": "T", "14": "T", "15": "T", "16": "T", "17": "DC", "18": "T", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "L", "25": "T", "26": "T", "27": "T", "28": "T", "29": "T", "30": "T"}, "7102": {"1": "L", "2": "T", "3": "L", "4": "T", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "DC", "11": "T", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "L", "18": "T", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "DC", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T"}, "7103": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "DC", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "DC", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T"}, "7107": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "T", "8": "T", "9": "DC", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "T", "22": "T", "23": "DC", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T"}, "7110": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "L", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "T", "12": "DC", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "L", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "T", "26": "DC", "27": "T", "28": "T", "29": "L", "30": "T"}, "7111": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "T", "6": "L", "7": "T", "8": "T", "9": "T", "10": "T", "11": "DC", "12": "T", "13": "L", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "T", "20": "L", "21": "T", "22": "T", "23": "T", "24": "T", "25": "DC", "26": "T", "27": "L", "28": "T", "29": "L", "30": "T"}, "7112": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "L", "8": "T", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "DC", "15": "L", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "L", "22": "T", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "DC", "29": "L", "30": "T"}, "7115": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "DC", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "DC", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T"}, "7122": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "L", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "T", "12": "DC", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "L", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "T", "26": "DC", "27": "T", "28": "T", "29": "L", "30": "T"}, "7104": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T"}, "7116": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "DC", "7": "T", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "L", "14": "T", "15": "T", "16": "T", "17": "T", "18": "T", "19": "DC", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "L", "28": "T", "29": "T", "30": "T"}, "7117": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "DC", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "DC", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T"}, "7118": {"1": "T", "2": "T", "3": "T", "4": "T", "5": "T", "6": "DC", "7": "T", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "L", "14": "T", "15": "T", "16": "T", "17": "T", "18": "T", "19": "T", "20": "DC", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "L", "28": "T", "29": "T", "30": "T"}, "7121": {"1": "L", "2": "T", "3": "T", "4": "T", "5": "L", "6": "T", "7": "T", "8": "T", "9": "T", "10": "DC", "11": "T", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "T", "19": "L", "20": "T", "21": "T", "22": "T", "23": "T", "24": "DC", "25": "T", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T"}, "7119": {"1": "L", "2": "T", "3": "T", "4": "L", "5": "T", "6": "T", "7": "T", "8": "T", "9": "T", "10": "T", "11": "DC", "12": "T", "13": "T", "14": "T", "15": "L", "16": "T", "17": "T", "18": "L", "19": "T", "20": "T", "21": "T", "22": "T", "23": "T", "24": "T", "25": "DC", "26": "T", "27": "T", "28": "T", "29": "L", "30": "T"}, "7120": {"1": "T", "2": "T", "3": "DC", "4": "T", "5": "T", "6": "T", "7": "T", "8": "L", "9": "T", "10": "T", "11": "T", "12": "T", "13": "L", "14": "T", "15": "T", "16": "T", "17": "DC", "18": "T", "19": "T", "20": "T", "21": "T", "22": "L", "23": "T", "24": "T", "25": "T", "26": "T", "27": "L", "28": "T", "29": "T", "30": "T"}}
};

function setMonth(m) {
  currentMonth = m;
  const b10 = document.getElementById('btn-month-10');
  const b11 = document.getElementById('btn-month-11');
  if (m === '10') {
    b10.className = 'px-2.5 py-1 rounded-lg text-xs font-bold transition-all bg-blue-600 text-white shadow';
    b11.className = 'px-2.5 py-1 rounded-lg text-xs font-bold transition-all bg-slate-800 text-slate-400 hover:text-white border border-slate-700';
  } else {
    b10.className = 'px-2.5 py-1 rounded-lg text-xs font-bold transition-all bg-slate-800 text-slate-400 hover:text-white border border-slate-700';
    b11.className = 'px-2.5 py-1 rounded-lg text-xs font-bold transition-all bg-blue-600 text-white shadow';
  }
}

let currentPin = '';
let currentUser = null;
let selectedAdminFaena = 'Tamarugal';
let workersList = [];
let requestsList = [];
let messagesList = [];

function pressKey(num) {
  if (currentPin.length < 4) {
    currentPin += num;
    updateDots();
  }
}

function deleteLast() {
  currentPin = currentPin.slice(0, -1);
  updateDots();
}

function clearPin() {
  currentPin = '';
  updateDots();
}

function updateDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById('dot-' + i);
    if (i < currentPin.length) {
      dot.className = 'w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-400 scale-110 transition-all';
    } else {
      dot.className = 'w-4 h-4 rounded-full border-2 border-slate-700 transition-all';
    }
  }
  document.getElementById('login-error').classList.add('hidden');

  const enterBtn = document.getElementById('btn-enter');
  if (currentPin.length === 4) {
    enterBtn.disabled = false;
    enterBtn.className = 'w-full max-w-[290px] mt-4 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer';
  } else {
    enterBtn.disabled = true;
    enterBtn.className = 'w-full max-w-[290px] mt-4 py-3.5 rounded-2xl bg-slate-800 text-slate-500 font-bold text-sm tracking-wider flex items-center justify-center gap-2 border border-slate-700/50 transition-all cursor-not-allowed';
  }
}

async function verifyPin() {
  if (currentPin.length !== 4) return;
  const errEl = document.getElementById('login-error');
  const btnText = document.getElementById('btn-enter-text');
  errEl.classList.add('hidden');
  btnText.innerText = 'VERIFICANDO...';

  const { data, error } = await db.from('supervisores').select('*').eq('pin', currentPin).single();
  btnText.innerText = 'INGRESAR';

  if (error || !data) {
    errEl.innerText = 'PIN no reconocido. Inténtalo nuevamente.';
    errEl.classList.remove('hidden');
    clearPin();
    return;
  }

  currentUser = data;
  localStorage.setItem('user_session', JSON.stringify(data));
  showDashboard();
}

function showDashboard() {
  document.getElementById('view-login').classList.add('hidden');
  document.getElementById('view-dashboard').classList.remove('hidden');
  document.getElementById('dash-user').innerText = currentUser.nombre;
  
  const badgeEl = document.getElementById('dash-faena-badge');
  const toggleEl = document.getElementById('admin-faena-toggle');

  if (currentUser.rol === 'admin') {
    badgeEl.innerText = 'ADMINISTRADOR GENERAL';
    toggleEl.classList.remove('hidden');
    selectAdminFaena('Tamarugal');
  } else {
    badgeEl.innerText = 'SUPERVISOR · FAENA ' + currentUser.faena.toUpperCase();
    toggleEl.classList.add('hidden');
    loadWorkers(currentUser.faena);
  }

  loadRequests();
  loadMessages();
  initRealtime();
}

function selectAdminFaena(faena) {
  selectedAdminFaena = faena;
  const btnTam = document.getElementById('toggle-tam');
  const btnVer = document.getElementById('toggle-ver');

  if (faena === 'Tamarugal') {
    btnTam.className = 'flex-1 py-1.5 rounded-lg text-xs font-bold transition-all text-center bg-blue-600 text-white shadow';
    btnVer.className = 'flex-1 py-1.5 rounded-lg text-xs font-bold transition-all text-center text-slate-400 hover:text-white';
  } else {
    btnTam.className = 'flex-1 py-1.5 rounded-lg text-xs font-bold transition-all text-center text-slate-400 hover:text-white';
    btnVer.className = 'flex-1 py-1.5 rounded-lg text-xs font-bold transition-all text-center bg-blue-600 text-white shadow';
  }
  loadWorkers(faena);
}

function logout() {
  currentUser = null;
  currentPin = '';
  updateDots();
  localStorage.removeItem('user_session');
  document.getElementById('view-dashboard').classList.add('hidden');
  document.getElementById('view-login').classList.remove('hidden');
}

function switchTab(tab) {
  const tabs = ['workers', 'requests', 'chat'];
  tabs.forEach(t => {
    const content = document.getElementById('tab-' + t);
    const btn = document.getElementById('tab-btn-' + t);
    if (t === tab) {
      content.classList.remove('hidden');
      btn.className = 'pb-2.5 border-b-2 border-blue-500 text-blue-400 font-semibold flex items-center gap-1.5';
    } else {
      content.classList.add('hidden');
      btn.className = 'pb-2.5 border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center gap-1.5';
    }
  });
  if (tab === 'chat') {
    setTimeout(scrollChatToBottom, 100);
  }
}

async function loadWorkers(faenaToLoad) {
  const container = document.getElementById('workers-list');
  container.innerHTML = '<div class="text-center py-8 text-slate-500 text-xs">Cargando nómina ' + faenaToLoad + '...</div>';

  const { data, error } = await db.from('trabajadores').select('*').eq('faena', faenaToLoad).order('codigo');
  if (error) return;
  workersList = data || [];

  container.innerHTML = '';
  workersList.forEach(w => {
    const card = document.createElement('div');
    card.className = 'p-3.5 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 flex items-center justify-between shadow-sm cursor-pointer active:bg-slate-850 transition-all';
    card.onclick = () => openWorkerSchedule(w);
    card.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-xs text-blue-400 border border-slate-700/80">
          ${w.codigo}
        </div>
        <div>
          <div class="text-sm font-bold text-white leading-tight">${w.nombre}</div>
          <div class="text-xs text-slate-400">${w.puesto || 'Operador'} <span class="text-slate-600 font-normal">· ${w.grupo || faenaToLoad}</span></div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/40">Ver Turno</span>
        <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </div>
    `;
    container.appendChild(card);
  });

  const outSelect = document.getElementById('req-worker-out');
  const inSelect = document.getElementById('req-worker-in');
  outSelect.innerHTML = workersList.map(w => `<option value="${w.id}">${w.nombre} (${w.codigo})</option>`).join('');
  inSelect.innerHTML = workersList.map(w => `<option value="${w.id}">${w.nombre} (${w.codigo})</option>`).join('');
}

function openWorkerSchedule(worker) {
  document.getElementById('m-worker-code').innerText = worker.codigo;
  document.getElementById('m-worker-name').innerText = worker.nombre;
  document.getElementById('m-worker-sub').innerText = (worker.puesto || 'Operador') + ' · ' + worker.faena + ' (' + (worker.grupo || 'General') + ')';
  document.getElementById('m-month-label').innerText = currentMonth === '11' ? 'Noviembre 2026' : 'Octubre 2026';

  const grid = document.getElementById('calendar-grid');
  grid.innerHTML = '';

  const isNov = (currentMonth === '11');
  const totalDays = isNov ? 30 : 31;
  const leadingBlanks = isNov ? 6 : 3;
  const sundays = isNov ? [1, 8, 15, 22, 29] : [4, 11, 18, 25];

  for (let i = 0; i < leadingBlanks; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'h-10 rounded-lg bg-slate-950/40 border border-slate-900';
    grid.appendChild(emptyCell);
  }

  const monthShifts = SHIFTS_DATABASE[currentMonth] || {};
  const workerShifts = monthShifts[worker.codigo] || {};
  let dtCount = 0;
  let domLabCount = 0;
  let dcCount = 0;

  for (let day = 1; day <= totalDays; day++) {
    const shift = workerShifts[day] || (isNov && worker.faena === 'Verdes' ? '-' : 'T');
    const isSunday = sundays.includes(day);
    if (shift === 'T') dtCount++;
    if (shift === 'T' && isSunday) domLabCount++;
    if (shift === 'DC') dcCount++;

    const cell = document.createElement('div');
    let styleClass = 'bg-slate-800 text-slate-200 border-slate-700';
    if (shift === 'L' || shift === 'D') {
      styleClass = 'bg-emerald-950 text-emerald-300 border-emerald-800 font-bold';
    } else if (shift === 'DC') {
      styleClass = 'bg-blue-950 text-blue-300 border-blue-800 font-bold';
    } else if (shift === 'LM' || shift === 'F') {
      styleClass = 'bg-rose-950 text-rose-300 border-rose-800 font-bold';
    } else if (shift === 'VAC') {
      styleClass = 'bg-amber-950 text-amber-300 border-amber-800 font-bold';
    } else if (shift === '-') {
      styleClass = 'bg-slate-900/60 text-slate-600 border-slate-800 font-normal';
    }

    cell.className = `h-11 rounded-xl border flex flex-col items-center justify-center p-0.5 ${styleClass}`;
    cell.innerHTML = `
      <span class="text-[9px] opacity-60 leading-none">${day}</span>
      <span class="text-xs font-bold leading-tight">${shift}</span>
    `;
    grid.appendChild(cell);
  }

  const totalCells = leadingBlanks + totalDays;
  const trailingBlanks = (7 - (totalCells % 7)) % 7;
  for (let i = 0; i < trailingBlanks; i++) {
    const emptyEnd = document.createElement('div');
    emptyEnd.className = 'h-10 rounded-lg bg-slate-950/40 border border-slate-900';
    grid.appendChild(emptyEnd);
  }

  const baseHours = (worker.faena === 'Verdes') ? 7.0 : 7.33;
  document.getElementById('m-stat-dt').innerText = dtCount;
  document.getElementById('m-stat-ht').innerText = (dtCount * baseHours).toFixed(1) + 'h';
  document.getElementById('m-stat-dom').innerText = domLabCount + ' / ' + dcCount;

  document.getElementById('modal-worker-schedule').classList.remove('hidden');
}

function closeWorkerSchedule() {
  document.getElementById('modal-worker-schedule').classList.add('hidden');
}

async function loadRequests() {
  const { data, error } = await db.from('solicitudes_cambio')
    .select('*, trabajador_sale:trabajador_sale_id(nombre, codigo, faena), trabajador_entra:trabajador_entra_id(nombre, codigo, faena), supervisor:supervisor_id(nombre, faena)')
    .order('id', { ascending: false });

  if (error) return;
  requestsList = data || [];

  const filtered = (currentUser.rol === 'admin') 
    ? requestsList 
    : requestsList.filter(r => r.supervisor?.faena === currentUser.faena || r.trabajador_sale?.faena === currentUser.faena);

  const pendingCount = filtered.filter(r => r.estado === 'PENDIENTE').length;
  const badge = document.getElementById('badge-requests');
  if (pendingCount > 0) {
    badge.innerText = pendingCount;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }

  const container = document.getElementById('requests-list');
  if (filtered.length === 0) {
    container.innerHTML = '<div class="text-center py-8 text-slate-500 text-xs">No hay solicitudes registradas.</div>';
    return;
  }

  container.innerHTML = '';
  filtered.forEach(r => {
    const isPending = r.estado === 'PENDIENTE';
    const card = document.createElement('div');
    card.className = 'p-3.5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2.5 shadow-sm';
    
    let statusBadge = '';
    if (r.estado === 'APROBADA') statusBadge = '<span class="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-lg font-bold">Aprobada</span>';
    else if (r.estado === 'RECHAZADA') statusBadge = '<span class="text-[10px] bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 rounded-lg font-bold">Rechazada</span>';
    else statusBadge = '<span class="text-[10px] bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded-lg font-bold">Pendiente</span>';

    card.innerHTML = `
      <div class="flex justify-between items-center text-xs">
        <span class="text-slate-400">Fecha: <strong class="text-white">${r.fecha_turno}</strong></span>
        ${statusBadge}
      </div>
      <div class="text-xs space-y-1">
        <div><span class="text-rose-400 font-semibold">Sale / Descanso:</span> ${r.trabajador_sale?.nombre || 'ID ' + r.trabajador_sale_id}</div>
        <div><span class="text-emerald-400 font-semibold">Entra / Reemplazo:</span> ${r.trabajador_entra?.nombre || 'ID ' + r.trabajador_entra_id}</div>
        <div class="text-slate-400 italic">"${r.motivo || 'Sin observación'}"</div>
        <div class="text-slate-500 text-[10px]">Solicitado por: ${r.supervisor?.nombre || 'Supervisor'}</div>
      </div>
      ${currentUser.rol === 'admin' && isPending ? `
        <div class="flex gap-2 pt-2 border-t border-slate-800">
          <button onclick="handleRequest(${r.id}, 'APROBADA')" class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow">Autorizar</button>
          <button onclick="handleRequest(${r.id}, 'RECHAZADA')" class="flex-1 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold shadow">Rechazar</button>
        </div>
      ` : ''}
    `;
    container.appendChild(card);
  });
}

function openModalRequest() { 
  document.getElementById('req-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('modal-request').classList.remove('hidden'); 
}
function closeModalRequest() { document.getElementById('modal-request').classList.add('hidden'); }

async function submitShiftRequest() {
  const date = document.getElementById('req-date').value;
  const workerOut = document.getElementById('req-worker-out').value;
  const workerIn = document.getElementById('req-worker-in').value;
  const reason = document.getElementById('req-reason').value;

  if (!date || !workerOut || !workerIn) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const { error } = await db.from('solicitudes_cambio').insert([{
    supervisor_id: currentUser.id,
    fecha_turno: date,
    trabajador_sale_id: workerOut,
    trabajador_entra_id: workerIn,
    motivo: reason,
    estado: 'PENDIENTE'
  }]);

  if (error) {
    alert('Error al enviar solicitud: ' + error.message);
  } else {
    await db.from('mensajes_chat').insert([{
      supervisor_id: currentUser.id,
      supervisor_nombre: currentUser.nombre,
      faena: currentUser.faena,
      mensaje: '📌 Se ha registrado una solicitud de reemplazo para la fecha ' + date + ' (' + reason + ').'
    }]);

    closeModalRequest();
    loadRequests();
    switchTab('requests');
  }
}

async function handleRequest(requestId, newStatus) {
  const { error } = await db.from('solicitudes_cambio').update({ estado: newStatus }).eq('id', requestId);
  if (error) alert('Error: ' + error.message);
  else {
    await db.from('mensajes_chat').insert([{
      supervisor_id: currentUser.id,
      supervisor_nombre: currentUser.nombre,
      faena: 'General',
      mensaje: '📢 La administración ha ' + (newStatus === 'APROBADA' ? 'APROBADO' : 'RECHAZADO') + ' una solicitud de reemplazo.'
    }]);
    loadRequests();
  }
}

async function loadMessages() {
  const { data, error } = await db.from('mensajes_chat')
    .select('*')
    .order('id', { ascending: true })
    .limit(60);

  if (error) return;
  messagesList = data || [];
  renderMessages();
}

function renderMessages() {
  const container = document.getElementById('chat-messages');
  if (messagesList.length === 0) {
    container.innerHTML = '<div class="text-center py-8 text-slate-500 text-xs">Bitácora limpia. Sé el primero en escribir un mensaje.</div>';
    return;
  }

  container.innerHTML = '';
  messagesList.forEach(m => {
    const isMine = m.supervisor_id === currentUser.id;
    const isSystem = m.mensaje.startsWith('📌') || m.mensaje.startsWith('📢');

    const msgDiv = document.createElement('div');
    msgDiv.className = `flex flex-col ${isMine ? 'items-end' : 'items-start'}`;

    const timeStr = m.created_at ? new Date(m.created_at).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' }) : '';

    if (isSystem) {
      msgDiv.className = 'flex justify-center my-1';
      msgDiv.innerHTML = `
        <div class="bg-slate-900 border border-slate-800 text-slate-300 text-[11px] px-3 py-1.5 rounded-xl max-w-[90%] text-center">
          ${m.mensaje} <span class="text-slate-500 text-[9px] ml-1">${timeStr}</span>
        </div>
      `;
    } else if (isMine) {
      msgDiv.innerHTML = `
        <div class="max-w-[80%] bg-blue-600 text-white rounded-2xl rounded-tr-none px-3.5 py-2 shadow-md">
          <div class="text-xs leading-relaxed">${m.mensaje}</div>
          <div class="text-[9px] text-blue-200 text-right mt-0.5">${timeStr}</div>
        </div>
      `;
    } else {
      msgDiv.innerHTML = `
        <div class="text-[10px] text-slate-400 font-semibold mb-0.5 ml-2">${m.supervisor_nombre} <span class="text-slate-600">(${m.faena})</span></div>
        <div class="max-w-[80%] bg-slate-800 border border-slate-700/70 text-slate-100 rounded-2xl rounded-tl-none px-3.5 py-2 shadow-md">
          <div class="text-xs leading-relaxed">${m.mensaje}</div>
          <div class="text-[9px] text-slate-400 text-right mt-0.5">${timeStr}</div>
        </div>
      `;
    }
    container.appendChild(msgDiv);
  });

  scrollChatToBottom();
}

function scrollChatToBottom() {
  const container = document.getElementById('chat-messages');
  container.scrollTop = container.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  const { error } = await db.from('mensajes_chat').insert([{
    supervisor_id: currentUser.id,
    supervisor_nombre: currentUser.nombre,
    faena: currentUser.faena,
    mensaje: text
  }]);

  if (error) alert('Error al enviar mensaje: ' + error.message);
}

function initRealtime() {
  db.channel('realtime_requests')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'solicitudes_cambio' }, () => {
      loadRequests();
    })
    .subscribe();

  db.channel('realtime_chat')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'mensajes_chat' }, (payload) => {
      messagesList.push(payload.new);
      renderMessages();
    })
    .subscribe();
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(err => console.log('SW:', err));
}

const saved = localStorage.getItem('user_session');
if (saved) {
  try {
    currentUser = JSON.parse(saved);
    showDashboard();
  } catch (e) { localStorage.removeItem('user_session'); }
}