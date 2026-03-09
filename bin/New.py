#!/usr/bin/env python3
"""
================================================================
  COMPREHENSIVE PYTHON LANGUAGE REFERENCE - ALL IN ONE FILE
  Covers: Basics, Data Types, Control Flow, Functions, OOP,
          Modules, File I/O, Exceptions, Iterators, Generators,
          Decorators, Context Managers, Comprehensions, Lambda,
          Regex, Threading, Async, Data Structures, Algorithms,
          Functional Programming, and much more.
================================================================
"""

# ================================================================
# SECTION 1: BASICS \u2014 VARIABLES, COMMENTS, PRINT
# ================================================================

print("\n===== SECTION 1: BASICS =====")

# Single-line comment
"""
Multi-line string (used as docstring or block comment)
"""

# Variable assignment
x = 10
y = 3.14
name = "Python"
is_active = True
nothing = None

print(f"x={x}, y={y}, name={name}, is_active={is_active}, nothing={nothing}")

# Multiple assignment
a, b, c = 1, 2, 3
print(f"a={a}, b={b}, c={c}")

# Swap
a, b = b, a
print(f"After swap: a={a}, b={b}")

# Augmented assignment
n = 10
n += 5;  print(f"+=  : {n}")
n -= 3;  print(f"-=  : {n}")
n *= 2;  print(f"*=  : {n}")
n //= 3; print(f"//= : {n}")
n **= 2; print(f"**= : {n}")
n %= 7;  print(f"%%=  : {n}")

# Walrus operator (Python 3.8+)
data = [1, 2, 3, 4, 5]
if (length := len(data)) > 3:
    print(f"Walrus: data has {length} elements")

# Type checking
print(type(x), type(y), type(name), type(is_active), type(nothing))
print(isinstance(x, int), isinstance(y, float), isinstance(name, str))

# ================================================================
# SECTION 2: DATA TYPES
# ================================================================

print("\n===== SECTION 2: DATA TYPES =====")

# --- int ---
big = 10_000_000       # underscores for readability
hexval = 0xFF
octval = 0o77
binval = 0b1010
print(f"int: {big}, hex={hexval}, oct={octval}, bin={binval}")
print(f"int max (arbitrary): {2**100}")

# --- float ---
f1 = 3.14
f2 = 2.5e-3
f3 = float('inf')
f4 = float('nan')
import math
print(f"float: {f1}, {f2}, inf={f3}, nan={f4}")
print(f"math.isinf={math.isinf(f3)}, math.isnan={math.isnan(f4)}")

# --- complex ---
z = 3 + 4j
print(f"complex: {z}, real={z.real}, imag={z.imag}, abs={abs(z)}")

# --- bool ---
print(f"bool: {True and False}, {True or False}, {not True}")
print(f"bool int: {int(True)}, {int(False)}")

# --- str ---
s = "Hello, World!"
print(f"str: {s}, len={len(s)}, upper={s.upper()}")

# --- bytes ---
b = b"hello"
print(f"bytes: {b}, decoded={b.decode()}")

# --- NoneType ---
val = None
print(f"None is None: {val is None}")

# ================================================================
# SECTION 3: STRINGS IN DEPTH
# ================================================================

print("\n===== SECTION 3: STRINGS =====")

s = "  Hello, Python World!  "

# Common methods
print(s.strip())
print(s.lower())
print(s.upper())
print(s.title())
print(s.replace("Python", "Awesome"))
print(s.strip().split(", "))
print(s.strip().startswith("Hello"))
print(s.strip().endswith("!"))
print(s.strip().find("Python"))
print(s.strip().count("l"))
print(s.strip().index("o"))
print("  whitespace  ".strip())
print("hello".center(20, "*"))
print("42".zfill(8))
print("hello world".capitalize())

# Slicing
s2 = "abcdefgh"
print(s2[1:5])        # bcde
print(s2[::-1])       # reverse
print(s2[::2])        # every other char
print(s2[2:7:2])      # every other from index 2-7

# f-strings
name = "Alice"
age = 30
pi = 3.14159
print(f"Name: {name}, Age: {age}, Pi: {pi:.2f}")
print(f"Expr: {2**10 = }")   # Python 3.8+
print(f"Padded: {name:<10}|{name:>10}|{name:^10}")
print(f"Number: {12345:,}")
print(f"Hex: {255:#010x}")
print(f"Sci: {0.000123:.2e}")

# str.format()
print("{0} is {1} years old".format(name, age))
print("{name} scored {score:.1f}".format(name="Bob", score=95.6))

# join / split
words = ["one", "two", "three"]
joined = " | ".join(words)
print(f"joined: {joined}")
print(f"split: {joined.split(' | ')}")

# Multiline string
poem = """Roses are red,
Violets are blue,
Python is great,
And so are you."""
print(poem)

# Raw string
path = r"C:\Users\name\Documents"
print(f"raw: {path}")

# String encoding
encoded = "caf\u00e9".encode("utf-8")
decoded = encoded.decode("utf-8")
print(f"encoded={encoded}, decoded={decoded}")

# str.maketrans / translate
table = str.maketrans("aeiou", "AEIOU")
print("hello world".translate(table))

# Palindrome check
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]
print(is_palindrome("racecar"), is_palindrome("hello"))

# ================================================================
# SECTION 4: LISTS
# ================================================================

print("\n===== SECTION 4: LISTS =====")

lst = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

# Basic operations
print(f"list: {lst}")
print(f"len={len(lst)}, min={min(lst)}, max={max(lst)}, sum={sum(lst)}")
print(f"count(5)={lst.count(5)}, index(9)={lst.index(9)}")

# Modification
lst.append(7)
lst.insert(2, 99)
lst.remove(99)
popped = lst.pop()
print(f"after ops: {lst}, popped={popped}")

# Sorting
lst_sorted = sorted(lst)
print(f"sorted: {lst_sorted}")
lst.sort(reverse=True)
print(f"sort(rev): {lst}")

# Slicing
lst2 = list(range(10))
print(f"lst2={lst2}")
print(f"[2:5]={lst2[2:5]}, [::2]={lst2[::2]}, [::-1]={lst2[::-1]}")

# Comprehension
squares = [x**2 for x in range(10)]
evens   = [x for x in range(20) if x % 2 == 0]
flat    = [x for row in [[1,2],[3,4],[5,6]] for x in row]
print(f"squares: {squares}")
print(f"evens:   {evens}")
print(f"flat:    {flat}")

# Nested list
matrix = [[1,2,3],[4,5,6],[7,8,9]]
transposed = [[row[i] for row in matrix] for i in range(3)]
print(f"transposed: {transposed}")

# copy vs reference
original = [1, 2, 3]
shallow  = original.copy()
import copy
deep     = copy.deepcopy([[1,2],[3,4]])
shallow.append(99)
print(f"original unchanged: {original}")

# Unpacking
first, *middle, last = [1,2,3,4,5]
print(f"unpack: first={first}, middle={middle}, last={last}")

# zip, enumerate
names  = ["Alice", "Bob", "Carol"]
scores = [95, 87, 92]
for i, (n, s) in enumerate(zip(names, scores)):
    print(f"  {i}: {n} -> {s}")

# ================================================================
# SECTION 5: TUPLES
# ================================================================

print("\n===== SECTION 5: TUPLES =====")

t = (1, 2, 3, 4, 5)
print(f"tuple: {t}, len={len(t)}, sum={sum(t)}")
print(f"t[1:3]={t[1:3]}, t[::-1]={t[::-1]}")

# Single-element tuple
single = (42,)
print(f"single tuple: {single}, type={type(single)}")

# Named tuple
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(f"Point: {p}, x={p.x}, y={p.y}, distance={math.hypot(p.x, p.y):.2f}")

# Tuple unpacking
coords = (10, 20, 30)
x, y, z = coords
print(f"unpacked: x={x}, y={y}, z={z}")

# Tuple as dict key (immutable)
d = {(0,0): "origin", (1,0): "right", (0,1): "up"}
print(f"tuple key: {d[(0,0)]}")

# ================================================================
# SECTION 6: DICTIONARIES
# ================================================================

print("\n===== SECTION 6: DICTIONARIES =====")

person = {"name": "Alice", "age": 30, "city": "NYC"}

# Access
print(person["name"])
print(person.get("country", "Unknown"))

# Modification
person["email"] = "alice@example.com"
person.update({"age": 31, "country": "USA"})
print(person)

# Iteration
print("Keys:  ", list(person.keys()))
print("Values:", list(person.values()))
print("Items: ", list(person.items()))

for key, val in person.items():
    print(f"  {key}: {val}")

# Dict comprehension
squares = {x: x**2 for x in range(6)}
print(f"dict comp: {squares}")

filtered = {k: v for k, v in squares.items() if v > 9}
print(f"filtered: {filtered}")

# Nested dict
config = {
    "database": {"host": "localhost", "port": 5432, "name": "mydb"},
    "app":      {"debug": True,       "port": 8000},
}
print(f"db host: {config['database']['host']}")

# defaultdict, Counter, OrderedDict
from collections import defaultdict, Counter, OrderedDict

word_count = defaultdict(int)
for w in "the cat sat on the mat the cat".split():
    word_count[w] += 1
print(f"defaultdict: {dict(word_count)}")

counter = Counter("abracadabra")
print(f"Counter: {counter}")
print(f"Most common: {counter.most_common(3)}")

od = OrderedDict([('a',1),('b',2),('c',3)])
print(f"OrderedDict: {od}")

# dict merge (Python 3.9+)
d1 = {"a": 1, "b": 2}
d2 = {"b": 99, "c": 3}
merged = d1 | d2
print(f"merged: {merged}")

# ================================================================
# SECTION 7: SETS
# ================================================================

print("\n===== SECTION 7: SETS =====")

s1 = {1, 2, 3, 4, 5}
s2 = {4, 5, 6, 7, 8}

print(f"union:        {s1 | s2}")
print(f"intersection: {s1 & s2}")
print(f"difference:   {s1 - s2}")
print(f"sym_diff:     {s1 ^ s2}")
print(f"subset:       {s1 <= {0,1,2,3,4,5,6}}")
print(f"superset:     {s1 >= {2,3}}")

s1.add(99)
s1.discard(99)
s1.discard(999)   # no error if missing
print(f"after add/discard: {s1}")

# frozenset (immutable)
fs = frozenset([1,2,3,4])
print(f"frozenset: {fs}")

# Set comprehension
even_sq = {x**2 for x in range(10) if x % 2 == 0}
print(f"set comp: {even_sq}")

# Deduplication
dupes = [1,2,2,3,3,3,4]
unique = list(set(dupes))
print(f"deduped: {sorted(unique)}")

# ================================================================
# SECTION 8: CONTROL FLOW
# ================================================================

print("\n===== SECTION 8: CONTROL FLOW =====")

# if / elif / else
score = 75
if   score >= 90: grade = "A"
elif score >= 80: grade = "B"
elif score >= 70: grade = "C"
elif score >= 60: grade = "D"
else:             grade = "F"
print(f"Score {score} -> Grade {grade}")

# Ternary / conditional expression
result = "even" if score % 2 == 0 else "odd"
print(f"{score} is {result}")

# for loop
print("for range:", end=" ")
for i in range(0, 10, 2):
    print(i, end=" ")
print()

# while loop
n = 1
while n < 32:
    n *= 2
print(f"while: n={n}")

# break, continue, else
for i in range(10):
    if i == 3: continue
    if i == 7: break
    print(i, end=" ")
else:
    print("for-else reached")  # not printed (break triggered)
print()

# for-else (no break)
for i in [2, 3, 5, 7]:
    if i > 10: break
else:
    print("for-else: no break triggered")

# match statement (Python 3.10+)
def describe(val):
    match val:
        case 0:           return "zero"
        case int(n) if n > 0: return f"positive int {n}"
        case str(s):      return f"string: {s}"
        case [x, y]:      return f"two-element list: {x}, {y}"
        case {"key": v}:  return f"dict with key={v}"
        case _:           return "unknown"

print(describe(0))
print(describe(42))
print(describe("hello"))
print(describe([1,2]))
print(describe({"key": "val"}))

# ================================================================
# SECTION 9: FUNCTIONS
# ================================================================

print("\n===== SECTION 9: FUNCTIONS =====")

# Basic function
def greet(name, greeting="Hello"):
    """Greet a person."""
    return f"{greeting}, {name}!"

print(greet("Alice"))
print(greet("Bob", "Hi"))
print(greet(greeting="Hey", name="Carol"))

# *args and **kwargs
def variadic(*args, **kwargs):
    print(f"  args={args}, kwargs={kwargs}")

variadic(1, 2, 3, x=10, y=20)

# Unpacking into function
def add3(a, b, c): return a + b + c
nums = [1, 2, 3]
print(add3(*nums))
info = {"a":10,"b":20,"c":30}
print(add3(**info))

# Return multiple values
def min_max(lst):
    return min(lst), max(lst)
lo, hi = min_max([3,1,4,1,5,9])
print(f"min={lo}, max={hi}")

# Nested functions
def outer(x):
    def inner(y):
        return x + y
    return inner

add5 = outer(5)
print(f"closure: {add5(3)}")

# Recursive functions
def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)

def fibonacci(n):
    if n <= 0: return 0
    if n == 1: return 1
    return fibonacci(n-1) + fibonacci(n-2)

print(f"10! = {factorial(10)}")
print(f"fib(10) = {fibonacci(10)}")

# Memoization with functools.lru_cache
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_memo(n):
    if n <= 1: return n
    return fib_memo(n-1) + fib_memo(n-2)

print(f"fib_memo(30) = {fib_memo(30)}")

# Type hints (Python 3.5+)
def power(base: float, exp: int) -> float:
    return base ** exp

print(f"power(2,10) = {power(2,10)}")

# Global and nonlocal
counter = 0
def increment():
    global counter
    counter += 1

increment(); increment()
print(f"global counter={counter}")

def make_counter():
    count = 0
    def inc():
        nonlocal count
        count += 1
        return count
    return inc

c = make_counter()
print(c(), c(), c())   # 1 2 3

# ================================================================
# SECTION 10: LAMBDA AND FUNCTIONAL PROGRAMMING
# ================================================================

print("\n===== SECTION 10: LAMBDA + FUNCTIONAL =====")

# Lambda
square  = lambda x: x**2
add     = lambda x, y: x + y
is_even = lambda x: x % 2 == 0

print(square(7), add(3,4), is_even(6))

# map, filter, reduce
from functools import reduce

nums = list
