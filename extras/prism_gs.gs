Prism.languages.gorillascript := Prism.languages.extend \javascript, {
  keyword: r"""
    \b(
      yield\*?|
      (throw|return)\??|
      ((all)?keys|label|map|require|async)!|
      (to-)?promise!
      )
    |
    \b(
        as|break|continue|return|
        (for|while|until)(\s+(first|every|some|filter|reduce))?|
        if|else|unless|switch|then|
        case|default|catch|finally|try|
        return(if|ing|unless)?|
        new|class|extends|private|public|protected|def|super|require|
        async(if|for|unless|until|while)?|
        import|export|returnif|returning|returnunless|mutable|
        macro|const|static|var|do|of|let|enum|namespace|package|true|false|
        null|undefined|void|GLOBAL|this|prototype|arguments|
        from
      )(?!-)\b
    """g
  operator: r"""
    \b(
      (has|owns)key|
      bit(and|or|xor|not|lshift|u?rshift)|
      and|or|xor|min|max|instanceof(some)?|typeof\!?|is(nt)?(?!\-)|in|to|til|by|
      not|xor|delete
    )(?!\-)\b|
    \b(
      (and|or|min|max)=|
      is-(array|boolean|function|null|number|object|string|undefined|void)!|
      post-(dec|inc)!
    )|
    !~?=|={1,2}|:=|::|&amp;|~=|\-(>|(?![\w]))|
    ~?[\+\*\/%\^\\]=?|~?%%|\?=?|(&lt;){2,3}|(&gt;){2,3}|
    &lt;=&gt;|\|&gt;|&lt;\||@|\.{3}|\-&gt;|(&lt;|&gt;)=?
    """g
  number: r"""\b-?(
    0x[\da-f_]+(\.[\da-f_]+)?|
    0b[01_]+(\.[\da-f_]+)?|
    0o[0-7_]+(\.[\da-f_]+)?|
    \d{1,2}r[\w\d_]+(\.[\w\d_]+)?|
    \d[_\d]*(\.[\d_]*)?(_[\w\d_]*)?|
    NaN|
    Infinity
  )\b"""g
  string:
    pattern: r"""
      r"(\\?.)*?"[gimy]*|
      r'(\\?.)*?'[gimy]*|
      "(\\?.)*?"|
      '(\\?.)*?'|
      \\\w[\w\d_]*(-\w[\w\d_]*)*\b
    """g
    inside:
      interpolation: r''' \$(
        \w[\d\w]*(\-\w[\d\w]*)* |
        \(.*?\)
      )
      '''g
  punctuation : r"[{}[\];(),.:]"g
  ident: r"""\b\w[\d\w]*(\-\w[\d\w]*)*(?!['"])\b"""g
}
Prism.languages.insert-before \gorillascript, \operator, {
  property: r"""
    [\.@]
    \w[\d\w]*(\-\w[\d\w]*)*\b
    |
    \w[\d\w]*(\-\w[\d\w]*)*\s*:
  """g
}
Prism.languages.insert-before \gorillascript, \ident, {
  primordial: r"""\b(
    Object|
    String|
    Number|
    Boolean|
    Function|
    Array|
    Math|
    JSON|
    Date|
    RegExp|
    Error|
    RangeError|
    ReferenceError|
    SyntaxError|
    TypeError|
    URIError|
    escape|
    unescape|
    parse(Int|\-int|Float|\-float)|
    is\-?NaN|
    is(F|\-f)inite|
    decode\-?URI((C|\-c)omponent)?|
    encode\-?URI((C|\-c)omponent)?
  )\b"""g
}