# ============================================================
# Refactored Code with Applied Fixes: frontend\src\App.jsx
# ============================================================

# Fix for: React State Mutation (Severity: HIGH)
setScore({ ...score, [data.result + 's']: score[data.result + 's'] + 1 });
