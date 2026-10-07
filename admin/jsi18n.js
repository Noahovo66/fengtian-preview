
'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = 0;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "%(cnt)s \u4e2d %(sel)s \u500b\u88ab\u9078"
    ],
    "%s selected option not visible": [
      "%s\u6240\u9078\u9078\u9805\u4e0d\u53ef\u898b"
    ],
    "(click to clear)": "(\u9ede\u64ca\u6e05\u9664)",
    "6 a.m.": "\u4e0a\u5348 6 \u9ede",
    "6 p.m.": "\u4e0b\u5348 6 \u9ede",
    "April": "\u56db\u6708",
    "August": "\u516b\u6708",
    "Available %s": "\u53ef\u7528 %s",
    "Cancel": "\u53d6\u6d88",
    "Choose %s by selecting them and then select the \"Choose\" arrow button.": "\u60f3\u9078\u64c7 %s \u53ef\u5148\u9078\u53d6\u5b83\u5011\u518d\u9ede \"\u9078\u53d6\" \u7bad\u982d\u6309\u9215\u3002",
    "Choose a Date": "\u9078\u64c7\u4e00\u500b\u65e5\u671f",
    "Choose a Time": "\u9078\u64c7\u4e00\u500b\u6642\u9593",
    "Choose a time": "\u9078\u64c7\u4e00\u500b\u6642\u9593",
    "Choose all %s": "\u9078\u53d6\u5168\u90e8 %s",
    "Choose selected %s": "\u9078\u64c7\u5df2\u9078\u53d6\u7684 %s",
    "Chosen %s": "%s \u88ab\u9078",
    "December": "\u5341\u4e8c\u6708",
    "February": "\u4e8c\u6708",
    "Filter": "\u904e\u6ffe\u5668",
    "Friday": "\u661f\u671f\u4e94",
    "January": "\u4e00\u6708",
    "July": "\u4e03\u6708",
    "June": "\u516d\u6708",
    "March": "\u4e09\u6708",
    "May": "\u4e94\u6708",
    "Midnight": "\u5348\u591c",
    "Monday": "\u661f\u671f\u4e00",
    "Noon": "\u4e2d\u5348",
    "Note: You are %s hour ahead of server time.": [
      "\u5099\u8a3b\uff1a\u60a8\u7684\u96fb\u8166\u6642\u9593\u6bd4\u4f3a\u670d\u5668\u5feb %s \u5c0f\u6642\u3002"
    ],
    "Note: You are %s hour behind server time.": [
      "\u5099\u8a3b\uff1a\u60a8\u7684\u96fb\u8166\u6642\u9593\u6bd4\u4f3a\u670d\u5668\u6162 %s \u5c0f\u6642\u3002"
    ],
    "November": "\u5341\u4e00\u6708",
    "Now": "\u73fe\u5728",
    "October": "\u5341\u6708",
    "Remove %s by selecting them and then select the \"Remove\" arrow button.": "\u60f3\u79fb\u9664 %s \u53ef\u5148\u9078\u53d6\u5b83\u5011\u518d\u9ede \"\u79fb\u9664\" \u7bad\u982d\u6309\u9215\u3002",
    "Remove all %s": "\u79fb\u9664\u5168\u90e8 %s",
    "Remove selected %s": "\u79fb\u9664\u9078\u53d6\u7684 %s",
    "Saturday": "\u661f\u671f\u516d",
    "September": "\u4e5d\u6708",
    "Sunday": "\u661f\u671f\u65e5",
    "Thursday": "\u661f\u671f\u56db",
    "Today": "\u4eca\u5929",
    "Tomorrow": "\u660e\u5929",
    "Tuesday": "\u661f\u671f\u4e8c",
    "Type into this box to filter down the list of available %s.": "\u5728\u6b64\u6846\u8f38\u5165\u4ee5\u904e\u6ffe\u53ef\u7528\u7684 %s \u5217\u8868\u3002",
    "Type into this box to filter down the list of selected %s.": "\u5728\u6b64\u6846\u8f38\u5165\u4ee5\u904e\u6ffe\u6240\u9078\u7684 %s \u5217\u8868\u3002",
    "Wednesday": "\u661f\u671f\u4e09",
    "Yesterday": "\u6628\u5929",
    "You have selected an action, and you haven\u2019t made any changes on individual fields. You\u2019re probably looking for the Go button rather than the Save button.": "\u4f60\u5df2\u9078\u4e86\u4e00\u500b\u64cd\u4f5c, \u4f46\u6c92\u6709\u4efb\u4f55\u6539\u8b8a\u3002\u4f60\u53ef\u80fd\u52d5\u5230 '\u57f7\u884c' \u6309\u9215, \u800c\u4e0d\u662f '\u5132\u5b58' \u6309\u9215\u3002",
    "You have selected an action, but you haven\u2019t saved your changes to individual fields yet. Please click OK to save. You\u2019ll need to re-run the action.": "\u4f60\u5df2\u9078\u4e86\u4e00\u500b\u64cd\u4f5c, \u4f46\u6709\u4e00\u500b\u53ef\u7de8\u8f2f\u6b04\u4f4d\u7684\u8b8a\u66f4\u5c1a\u672a\u5132\u5b58\u3002\u8acb\u9ede\u9078 OK \u9032\u884c\u5132\u5b58\u3002\u4f60\u9700\u8981\u91cd\u65b0\u57f7\u884c\u8a72\u52d5\u4f5c\u3002",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u4f60\u5c1a\u672a\u5132\u5b58\u4e00\u500b\u53ef\u7de8\u8f2f\u6b04\u4f4d\u7684\u8b8a\u66f4\u3002\u5982\u679c\u4f60\u57f7\u884c\u52d5\u4f5c, \u672a\u5132\u5b58\u7684\u8b8a\u66f4\u5c07\u6703\u907a\u5931\u3002",
    "abbrev. day Friday\u0004Fri": "\u661f\u671f\u4e94",
    "abbrev. day Monday\u0004Mon": "\u661f\u671f\u4e00",
    "abbrev. day Saturday\u0004Sat": "\u661f\u671f\u516d",
    "abbrev. day Sunday\u0004Sun": "\u661f\u671f\u65e5",
    "abbrev. day Thursday\u0004Thur": "\u661f\u671f\u56db",
    "abbrev. day Tuesday\u0004Tue": "\u661f\u671f\u4e8c",
    "abbrev. day Wednesday\u0004Wed": "\u661f\u671f\u4e09",
    "abbrev. month April\u0004Apr": "\u56db\u6708",
    "abbrev. month August\u0004Aug": "\u516b\u6708",
    "abbrev. month December\u0004Dec": "\u5341\u4e8c\u6708",
    "abbrev. month February\u0004Feb": "\u4e8c\u6708",
    "abbrev. month January\u0004Jan": "\u4e00\u6708",
    "abbrev. month July\u0004Jul": "\u4e03\u6708",
    "abbrev. month June\u0004Jun": "\u516d\u6708",
    "abbrev. month March\u0004Mar": "\u4e09\u6708",
    "abbrev. month May\u0004May": "\u4e94\u6708",
    "abbrev. month November\u0004Nov": "\u5341\u4e00\u6708",
    "abbrev. month October\u0004Oct": "\u5341\u6708",
    "abbrev. month September\u0004Sep": "\u4e5d\u6708",
    "one letter Friday\u0004F": "\u4e94",
    "one letter Monday\u0004M": "\u4e00",
    "one letter Saturday\u0004S": "\u516d",
    "one letter Sunday\u0004S": "\u65e5",
    "one letter Thursday\u0004T": "\u56db",
    "one letter Tuesday\u0004T": "\u4e8c",
    "one letter Wednesday\u0004W": "\u4e09"
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y/%m/%d %H:%M",
      "%Y-%m-%d %H:%M",
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M",
      "%Y/%m/%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S",
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M:%S",
      "%Y/%m/%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y\u5e74%n\u6708%j\u65e5 %H:%n:%S.%f",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "Y\u5e74n\u6708j\u65e5",
    "DATE_INPUT_FORMATS": [
      "%Y/%m/%d",
      "%Y-%m-%d",
      "%Y\u5e74%n\u6708%j\u65e5"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "m\u6708j\u65e5",
    "NUMBER_GROUPING": 4,
    "SHORT_DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i",
    "SHORT_DATE_FORMAT": "Y\u5e74n\u6708j\u65e5",
    "THOUSAND_SEPARATOR": "",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M",
      "%H:%M:%S",
      "%H:%M:%S.%f"
    ],
    "YEAR_MONTH_FORMAT": "Y\u5e74n\u6708"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};

