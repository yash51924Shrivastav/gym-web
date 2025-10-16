// Workout data structure with YouTube links and instructions
const workoutPlans = {
    monday: {
        title: "Monday - Chest & Triceps",
        exercises: [
            { 
                name: "Bench Press", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg",
                instructions: "Lie on bench, grip bar with hands wider than shoulders. Lower bar to chest, press up explosively. Keep feet flat on floor and core engaged throughout the movement."
            },
            { 
                name: "Dumbbell Press", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/VmB1G1K7v94",
                instructions: "Lie on bench holding dumbbells. Press weights up and together, squeeze chest at top. Lower with control until dumbbells are at chest level."
            },
            { 
                name: "Dumbbell Flyes", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/eozdVDA78K0",
                instructions: "Lie on bench, start with dumbbells together above chest. Lower in wide arc with slight bend in elbows. Feel stretch in chest, then bring back to start."
            },
            { 
                name: "Machine Press", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/xUm0BiZCWlQ",
                instructions: "Adjust seat height so handles are at chest level. Press handles forward until arms are extended. Control the weight back to starting position."
            },
            { 
                name: "Tricep Dips", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/0326dy_-CzM",
                instructions: "Support body weight on parallel bars or chair. Lower body until elbows are at 90 degrees. Press back up to starting position using triceps."
            },
            { 
                name: "Tricep Pushdowns", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/2-LAMcpzODU",
                instructions: "Stand at cable machine with rope or bar attachment. Keep elbows at sides, push weight down until arms are straight. Control back to start."
            },
            { 
                name: "Overhead Tricep Extension", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/YbX7Wd8jQ-Q",
                instructions: "Hold dumbbell overhead with both hands. Lower weight behind head by bending elbows. Extend arms back to starting position."
            },
            { 
                name: "Plank", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/ASdvN_XEl_c",
                instructions: "Hold body in straight line from head to heels. Support weight on forearms and toes. Keep core tight and breathe normally. Hold for 30-60 seconds."
            }
        ]
    },
    tuesday: {
        title: "Tuesday - Back & Biceps",
        exercises: [
            { 
                name: "Pull-ups", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g",
                instructions: "Hang from bar with overhand grip. Pull body up until chin clears bar. Lower with control. Use assistance or bands if needed."
            },
            { 
                name: "Bent Over Rows", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/FWJR5Ve8bnQ",
                instructions: "Bend at hips holding barbell. Keep back straight, pull bar to lower chest. Squeeze shoulder blades together at top."
            },
            { 
                name: "Lat Pulldowns", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/CAwf7n6Luuc",
                instructions: "Sit at lat machine, grip bar wider than shoulders. Pull bar down to upper chest while leaning back slightly. Control back to start."
            },
            { 
                name: "Seated Cable Rows", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/UCXxvVItLoM",
                instructions: "Sit with knees slightly bent, pull handle to lower chest. Keep back straight and squeeze shoulder blades together."
            },
            { 
                name: "Bicep Curls", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
                instructions: "Stand holding dumbbells at sides. Curl weights up by contracting biceps. Keep elbows stationary at sides. Lower with control."
            },
            { 
                name: "Hammer Curls", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/zC3nLlEvin4",
                instructions: "Hold dumbbells with neutral grip (palms facing each other). Curl up keeping wrists straight. Target both biceps and forearms."
            },
            { 
                name: "Preacher Curls", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/fIWP-FRFNU0",
                instructions: "Rest arms on preacher bench pad. Curl weight up with strict form. Lower slowly to prevent injury. Focus on bicep contraction."
            },
            { 
                name: "Russian Twists", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/wkD8rjkodUI",
                instructions: "Sit with knees bent, lean back slightly. Hold weight and rotate torso left and right. Keep feet off ground for added difficulty."
            }
        ]
    },
    wednesday: {
        title: "Wednesday - Legs & Shoulders",
        exercises: [
            { 
                name: "Squats", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/Dy28eq2PjcM",
                instructions: "Stand with feet shoulder-width apart. Lower body as if sitting back into chair. Keep chest up, knees over toes. Drive through heels to stand."
            },
            { 
                name: "Deadlifts", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/ytGaGIn3SjE",
                instructions: "Stand with bar over mid-foot. Bend at hips and knees to grab bar. Keep back straight, drive through heels to lift. Reverse movement to lower."
            },
            { 
                name: "Leg Press", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/IZxyjW7MPJQ",
                instructions: "Sit in leg press machine, feet on platform. Lower weight until knees are at 90 degrees. Press through heels to extend legs."
            },
            { 
                name: "Leg Curls", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/1Tq3QdYUuHs",
                instructions: "Lie face down on leg curl machine. Curl heels toward glutes by contracting hamstrings. Lower weight with control."
            },
            { 
                name: "Shoulder Press", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/qEwKCR5JCog",
                instructions: "Sit or stand holding dumbbells at shoulder level. Press weights straight up until arms are extended. Lower with control to shoulders."
            },
            { 
                name: "Lateral Raises", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/3VcKaXpzqRo",
                instructions: "Stand holding dumbbells at sides. Raise arms out to sides until parallel to floor. Keep slight bend in elbows. Lower slowly."
            },
            { 
                name: "Rear Delt Flyes", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/EA7u4Q_8HQ0",
                instructions: "Bend forward holding dumbbells. Raise arms out to sides, squeezing shoulder blades. Focus on rear deltoids and upper back."
            },
            { 
                name: "Crunches", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/Xyd_fa5zoEU",
                instructions: "Lie on back, knees bent. Place hands behind head, crunch up by contracting abs. Don't pull on neck. Focus on quality over quantity."
            }
        ]
    },
    thursday: {
        title: "Thursday - Chest & Triceps",
        exercises: [
            { 
                name: "Incline Bench Press", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/SrqOu55lrYU",
                instructions: "Set bench to 30-45 degree incline. Press bar from upper chest to arms extended. Targets upper chest muscles."
            },
            { 
                name: "Decline Dumbbell Press", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/Bzpmlz9T9V8",
                instructions: "Lie on decline bench holding dumbbells. Press weights up and together. Focus on lower chest muscle activation."
            },
            { 
                name: "Cable Flyes", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/Iwe6AmcnCwY",
                instructions: "Stand between cable machines, arms extended. Bring cables together in front of chest. Maintain slight bend in elbows."
            },
            { 
                name: "Chest Dips", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/2z8JmcrW-As",
                instructions: "Support body on parallel bars. Lean forward slightly, lower body until stretch in chest. Press back up focusing on chest."
            },
            { 
                name: "Close Grip Bench Press", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/nEF0bv2FW94",
                instructions: "Grip bar with hands closer than shoulder width. Lower to chest keeping elbows close to body. Press up targeting triceps."
            },
            { 
                name: "Tricep Rope Pushdowns", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/REpPx7d1WhE",
                instructions: "Use rope attachment on cable machine. Pull rope apart at bottom of movement. Focus on tricep contraction and control."
            },
            { 
                name: "Diamond Push-ups", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/J0DnG1_S92I",
                instructions: "Form diamond shape with hands under chest. Perform push-ups with elbows close to body. Intense tricep and chest workout."
            },
            { 
                name: "Bicycle Crunches", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/9FGilxCbdz8",
                instructions: "Lie on back, hands behind head. Bring opposite elbow to knee in cycling motion. Keep continuous movement for entire set."
            }
        ]
    },
    friday: {
        title: "Friday - Back & Biceps",
        exercises: [
            { 
                name: "Deadlifts", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/ytGaGIn3SjE",
                instructions: "Stand with bar over mid-foot. Bend at hips and knees to grab bar. Keep back straight, drive through heels to lift. Reverse movement to lower."
            },
            { 
                name: "T-Bar Rows", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/j3Igk5nyZE4",
                instructions: "Straddle T-bar, bend at hips. Pull bar to chest keeping back straight. Focus on squeezing shoulder blades together."
            },
            { 
                name: "Wide Grip Pulldowns", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/CAwf7n6Luuc",
                instructions: "Use wide grip on lat bar. Pull down to upper chest while arching back slightly. Focus on lat muscle engagement."
            },
            { 
                name: "Face Pulls", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/rep-qVOkqgk",
                instructions: "Set cable at face level with rope. Pull rope to face separating ends. Focus on rear delts and rhomboids."
            },
            { 
                name: "Barbell Curls", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/kwG2ipFRgfo",
                instructions: "Stand holding barbell with underhand grip. Curl bar up by contracting biceps. Keep body still, control the weight."
            },
            { 
                name: "Cable Curls", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/NFzTWp2qpiE",
                instructions: "Use low cable with bar attachment. Curl up maintaining constant tension. Focus on bicep peak contraction."
            },
            { 
                name: "21s Curls", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/uO_CNcWeXnU",
                instructions: "7 reps bottom half, 7 reps top half, 7 full reps. Extremely challenging bicep exercise. Use lighter weight."
            },
            { 
                name: "Leg Raises", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/JB2oyawG9KI",
                instructions: "Lie on back, hands at sides. Raise legs to 90 degrees keeping them straight. Lower with control, don't let feet touch ground."
            }
        ]
    },
    saturday: {
        title: "Saturday - Legs & Shoulders",
        exercises: [
            { 
                name: "Front Squats", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/uYumuL_G_V0",
                instructions: "Hold bar across front shoulders. Squat down keeping chest up and elbows high. More quad-focused than back squats."
            },
            { 
                name: "Romanian Deadlifts", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/jEy_czb3RKA",
                instructions: "Hold bar at hip level. Push hips back while lowering bar along legs. Feel stretch in hamstrings, return to start."
            },
            { 
                name: "Lunges", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/QOVaHwm-Q6U",
                instructions: "Step forward into lunge position. Lower back knee toward ground. Push through front heel to return to start. Alternate legs."
            },
            { 
                name: "Calf Raises", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/gwLzBJYoWlI",
                instructions: "Stand on balls of feet on platform. Rise up as high as possible on toes. Lower heels below platform level for full stretch."
            },
            { 
                name: "Arnold Press", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/6Z15_WdXmVw",
                instructions: "Start with palms facing you. As you press up, rotate hands so palms face forward at top. Reverse on way down."
            },
            { 
                name: "Front Raises", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/4T9Kes1WS8s",
                instructions: "Hold dumbbells at sides. Raise one or both arms forward to shoulder height. Keep slight bend in elbow, control the movement."
            },
            { 
                name: "Shrugs", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/cJRVVxmytaM",
                instructions: "Hold heavy dumbbells at sides. Shrug shoulders up toward ears. Hold briefly at top, lower with control."
            },
            { 
                name: "Mountain Climbers", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/wQq3ybaLZeA",
                instructions: "Start in plank position. Alternate bringing knees to chest rapidly. Keep hips level and core engaged throughout."
            }
        ]
    },
    sunday: {
        title: "Sunday - Explosive Workout",
        exercises: [
            { 
                name: "Monkey Jumps", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/CV_-5oNgOfY",
                instructions: "Squat down, place hands on ground. Jump feet back to plank, then jump feet forward and leap up with arms overhead."
            },
            { 
                name: "Semicircle Practice", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/HGEdeOdkX2M",
                instructions: "Jump side to side in semicircle pattern. Land softly and maintain balance. Great for agility and coordination training."
            },
            { 
                name: "Ball Drops", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/VgKqNl9RtF8",
                instructions: "Hold medicine ball overhead. Drop into squat while slamming ball to ground. Pick up and repeat explosively."
            },
            { 
                name: "Jumping Jacks", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/jbWCOhN8WPM",
                instructions: "Jump feet apart while raising arms overhead. Jump back to start position. Classic cardio exercise for full body activation."
            },
            { 
                name: "Leg Jumps", 
                sets: 3, 
                videoUrl: "https://www.youtube.com/embed/Ks9QMFb4mKM",
                instructions: "Jump as high as possible bringing knees to chest. Land softly and immediately jump again. Focus on explosive power."
            }
        ]
    }
};

// Application state
let currentUser = '';
let currentDay = '';
let workoutProgress = JSON.parse(localStorage.getItem('workoutProgress')) || [];
let userAnalytics = JSON.parse(localStorage.getItem('userAnalytics')) || {};
let currentWorkout = [];
let currentExerciseIndex = 0;
let currentSet = 1;
let timerInterval = null;
let timerSeconds = 60;
let setStartTime = null;
let restStartTime = null;
let currentSessionData = null;

// Admin credentials
const ADMIN_NAME = 'Yash-devil-side';

// DOM elements
const pages = {
    home: document.getElementById('home-page'),
    input: document.getElementById('exercise-input-page'),
    workout: document.getElementById('workout-page'),
    exercise: document.getElementById('exercise-page'),
    timer: document.getElementById('timer-page'),
    progress: document.getElementById('progress-page'),
    admin: document.getElementById('admin-page')
};

const elements = {
    startExerciseBtn: document.getElementById('start-exercise-btn'),
    checkProgressBtn: document.getElementById('check-progress-btn'),
    backHome: document.getElementById('back-home'),
    backToInput: document.getElementById('back-to-input'),
    backToWorkout: document.getElementById('back-to-workout'),
    backHomeProgress: document.getElementById('back-home-progress'),
    workoutForm: document.getElementById('workout-form'),
    userNameInput: document.getElementById('user-name'),
    workoutDaySelect: document.getElementById('workout-day'),
    workoutTitle: document.getElementById('workout-title'),
    userGreeting: document.getElementById('user-greeting'),
    workoutContainer: document.getElementById('workout-container'),
    completeWorkout: document.getElementById('complete-workout'),
    newWorkout: document.getElementById('new-workout'),
    totalWorkouts: document.getElementById('total-workouts'),
    currentStreak: document.getElementById('current-streak'),
    workoutHistory: document.getElementById('workout-history'),
    
    // Exercise page elements
    currentExerciseNumber: document.getElementById('current-exercise-number'),
    totalExercises: document.getElementById('total-exercises'),
    exerciseName: document.getElementById('exercise-name'),
    exerciseVideo: document.getElementById('exercise-video'),
    exerciseInstructions: document.getElementById('exercise-instructions'),
    currentSetSpan: document.getElementById('current-set'),
    totalSets: document.getElementById('total-sets'),
    completeSet: document.getElementById('complete-set'),
    prevExercise: document.getElementById('prev-exercise'),
    nextExercise: document.getElementById('next-exercise'),
    
    // Timer elements
    timerMinutes: document.getElementById('timer-minutes'),
    timerSeconds: document.getElementById('timer-seconds'),
    timerProgress: document.getElementById('timer-progress'),
    extendTimer: document.getElementById('extend-timer'),
    skipTimer: document.getElementById('skip-timer'),
    reduceTimer: document.getElementById('reduce-timer'),
    
    // Home page stats
    totalUsers: document.getElementById('total-users'),
    totalCompletedWorkouts: document.getElementById('total-completed-workouts'),
    totalSetsCompleted: document.getElementById('total-sets-completed'),
    
    // Modal elements
    progressNameModal: document.getElementById('progress-name-modal'),
    progressNameForm: document.getElementById('progress-name-form'),
    progressNameInput: document.getElementById('progress-name'),
    closeModal: document.getElementById('close-modal'),
    cancelProgress: document.getElementById('cancel-progress'),
    
    // Progress page elements
    progressPageTitle: document.getElementById('progress-page-title'),
    userTotalSets: document.getElementById('user-total-sets'),
    avgRestTime: document.getElementById('avg-rest-time'),
    workoutDetailsContainer: document.getElementById('workout-details-container'),
    
    // Admin elements
    backHomeAdmin: document.getElementById('back-home-admin'),
    adminTotalUsers: document.getElementById('admin-total-users'),
    adminTotalWorkouts: document.getElementById('admin-total-workouts'),
    adminTotalSets: document.getElementById('admin-total-sets'),
    adminAvgTime: document.getElementById('admin-avg-time'),
    allUsersData: document.getElementById('all-users-data'),
    currentActiveUser: document.getElementById('current-active-user'),
    setCompletionTime: document.getElementById('set-completion-time'),
    restDuration: document.getElementById('rest-duration')
};

// Navigation functions
function showPage(pageName) {
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages[pageName].classList.add('active');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Generate workout overview display
function displayWorkout() {
    const workout = workoutPlans[currentDay];
    if (!workout) return;

    elements.workoutTitle.textContent = workout.title;
    elements.userGreeting.textContent = `Hey ${currentUser}! Ready for today's workout? 💪`;

    elements.workoutContainer.innerHTML = '';
    
    // Create exercise cards for overview
    workout.exercises.forEach((exercise, index) => {
        const exerciseCard = document.createElement('div');
        exerciseCard.className = 'exercise-card';
        exerciseCard.style.cursor = 'pointer';
        
        const exerciseName = document.createElement('h3');
        exerciseName.textContent = `${index + 1}. ${exercise.name}`;
        exerciseCard.appendChild(exerciseName);
        
        const setsInfo = document.createElement('p');
        setsInfo.textContent = `${exercise.sets} sets`;
        setsInfo.style.color = '#666';
        setsInfo.style.marginTop = '0.5rem';
        exerciseCard.appendChild(setsInfo);
        
        exerciseCard.addEventListener('click', () => {
            startWorkout(index);
        });
        
        elements.workoutContainer.appendChild(exerciseCard);
    });
    
    // Add start workout button
    const startButton = document.createElement('button');
    startButton.className = 'btn primary';
    startButton.style.width = '100%';
    startButton.style.marginTop = '2rem';
    startButton.textContent = 'Start First Exercise';
    startButton.addEventListener('click', () => startWorkout(0));
    
    elements.workoutContainer.appendChild(startButton);
    showPage('workout');
}

// Start individual workout flow with analytics
function startWorkout(exerciseIndex = 0) {
    currentWorkout = workoutPlans[currentDay].exercises;
    currentExerciseIndex = exerciseIndex;
    currentSet = 1;
    
    // Initialize session data
    currentSessionData = {
        user: currentUser,
        day: currentDay,
        date: new Date().toLocaleDateString(),
        startTime: Date.now(),
        exercises: {},
        totalSets: currentWorkout.reduce((sum, ex) => sum + ex.sets, 0),
        completedSets: 0
    };
    
    // Update admin real-time data
    if (elements.currentActiveUser) {
        elements.currentActiveUser.textContent = currentUser;
    }
    
    displayCurrentExercise();
}

// Display current exercise with timing
function displayCurrentExercise() {
    const exercise = currentWorkout[currentExerciseIndex];
    if (!exercise) return;
    
    // Start timing for this set
    setStartTime = Date.now();
    
    // Update exercise info
    elements.currentExerciseNumber.textContent = currentExerciseIndex + 1;
    elements.totalExercises.textContent = currentWorkout.length;
    elements.exerciseName.textContent = exercise.name;
    elements.exerciseVideo.src = exercise.videoUrl;
    elements.exerciseInstructions.textContent = exercise.instructions;
    
    // Update set info
    elements.currentSetSpan.textContent = currentSet;
    elements.totalSets.textContent = exercise.sets;
    
    // Update navigation buttons
    elements.prevExercise.disabled = currentExerciseIndex === 0;
    elements.nextExercise.textContent = currentExerciseIndex === currentWorkout.length - 1 ? 'Finish Workout' : 'Next Exercise →';
    
    // Update complete set button
    elements.completeSet.textContent = currentSet === exercise.sets ? 'Complete Exercise' : 'Complete Set';
    
    showPage('exercise');
}

// Complete current set with tracking
function completeCurrentSet() {
    const exercise = currentWorkout[currentExerciseIndex];
    const setCompletionTime = Date.now() - setStartTime;
    
    // Track set completion time
    if (!currentSessionData.exercises[currentExerciseIndex]) {
        currentSessionData.exercises[currentExerciseIndex] = {
            name: exercise.name,
            sets: [],
            totalTime: 0
        };
    }
    
    currentSessionData.exercises[currentExerciseIndex].sets.push({
        setNumber: currentSet,
        completionTime: setCompletionTime,
        timestamp: new Date().toLocaleTimeString()
    });
    
    // Update admin real-time data
    if (elements.setCompletionTime) {
        elements.setCompletionTime.textContent = `${(setCompletionTime / 1000).toFixed(1)}s`;
    }
    
    if (currentSet < exercise.sets) {
        // More sets remaining, start rest timer
        currentSet++;
        startRestTimer();
    } else {
        // Exercise complete, move to next
        currentSet = 1;
        if (currentExerciseIndex < currentWorkout.length - 1) {
            currentExerciseIndex++;
            displayCurrentExercise();
        } else {
            // Workout complete!
            completeWorkout();
        }
    }
}

// Navigate to previous exercise
function previousExercise() {
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
        currentSet = 1;
        displayCurrentExercise();
    }
}

// Navigate to next exercise
function nextExercise() {
    if (currentExerciseIndex < currentWorkout.length - 1) {
        currentExerciseIndex++;
        currentSet = 1;
        displayCurrentExercise();
    } else {
        completeWorkout();
    }
}

// Complete entire workout with detailed analytics
function completeWorkout() {
    const endTime = Date.now();
    const totalWorkoutTime = endTime - currentSessionData.startTime;
    
    const workoutData = {
        user: currentUser,
        day: currentDay,
        date: new Date().toLocaleDateString(),
        timestamp: endTime,
        totalExercises: currentWorkout.length,
        totalSets: currentWorkout.reduce((sum, ex) => sum + ex.sets, 0),
        totalTime: totalWorkoutTime,
        exercises: currentSessionData.exercises
    };

    // Update user analytics
    if (!userAnalytics[currentUser]) {
        userAnalytics[currentUser] = {
            totalWorkouts: 0,
            totalSets: 0,
            totalTime: 0,
            workouts: [],
            avgRestTime: 0,
            lastWorkout: null
        };
    }
    
    const userStats = userAnalytics[currentUser];
    userStats.totalWorkouts++;
    userStats.totalSets += workoutData.totalSets;
    userStats.totalTime += totalWorkoutTime;
    userStats.lastWorkout = new Date().toLocaleDateString();
    userStats.workouts.push(workoutData);
    
    // Save data
    workoutProgress.push(workoutData);
    localStorage.setItem('workoutProgress', JSON.stringify(workoutProgress));
    localStorage.setItem('userAnalytics', JSON.stringify(userAnalytics));
    
    // Update home page stats
    updateHomeStats();
    
    // Clear admin active user
    if (elements.currentActiveUser) {
        elements.currentActiveUser.textContent = 'None';
    }

    alert(`🎉 Incredible work, ${currentUser}! You completed all ${workoutData.totalExercises} exercises and ${workoutData.totalSets} sets in ${(totalWorkoutTime / 60000).toFixed(1)} minutes! 💪`);
    showPage('home');
}

// Rest Timer Functions with tracking
function startRestTimer() {
    restStartTime = Date.now();
    timerSeconds = 60;
    updateTimerDisplay();
    showPage('timer');
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            trackRestTime();
            displayCurrentExercise();
        }
    }, 1000);
}

function trackRestTime() {
    const restTime = Date.now() - restStartTime;
    const exerciseIndex = currentExerciseIndex;
    
    if (currentSessionData.exercises[exerciseIndex] && currentSessionData.exercises[exerciseIndex].sets.length > 0) {
        const lastSet = currentSessionData.exercises[exerciseIndex].sets[currentSessionData.exercises[exerciseIndex].sets.length - 1];
        lastSet.restTime = restTime;
    }
    
    // Update admin real-time data
    if (elements.restDuration) {
        elements.restDuration.textContent = `${(restTime / 1000).toFixed(1)}s`;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    
    elements.timerMinutes.textContent = minutes.toString().padStart(2, '0');
    elements.timerSeconds.textContent = seconds.toString().padStart(2, '0');
    
    // Update progress circle
    const totalSeconds = 60;
    const progress = (totalSeconds - timerSeconds) / totalSeconds;
    const circumference = 2 * Math.PI * 90; // radius = 90
    const offset = circumference * (1 - progress);
    
    elements.timerProgress.style.strokeDashoffset = offset;
}

function extendTimer() {
    timerSeconds += 30;
    updateTimerDisplay();
}

function reduceTimer() {
    timerSeconds = Math.max(0, timerSeconds - 15);
    updateTimerDisplay();
}

function skipTimer() {
    clearInterval(timerInterval);
    trackRestTime();
    displayCurrentExercise();
}

// Home page statistics update
function updateHomeStats() {
    const totalUsers = Object.keys(userAnalytics).length;
    const totalWorkouts = workoutProgress.length;
    const totalSets = Object.values(userAnalytics).reduce((sum, user) => sum + user.totalSets, 0);
    
    if (elements.totalUsers) elements.totalUsers.textContent = totalUsers;
    if (elements.totalCompletedWorkouts) elements.totalCompletedWorkouts.textContent = totalWorkouts;
    if (elements.totalSetsCompleted) elements.totalSetsCompleted.textContent = totalSets;
}

// Modal handling
function showProgressModal() {
    if (elements.progressNameModal) {
        elements.progressNameModal.classList.add('active');
        elements.progressNameInput.focus();
    }
}

function hideProgressModal() {
    if (elements.progressNameModal) {
        elements.progressNameModal.classList.remove('active');
        elements.progressNameInput.value = '';
    }
}

function handleProgressRequest(userName) {
    if (userName === ADMIN_NAME) {
        showAdminDashboard();
    } else {
        showUserProgress(userName);
    }
}

// User progress display
function showUserProgress(userName) {
    const userData = userAnalytics[userName];
    
    if (!userData) {
        alert(`No workout data found for ${userName}. Start exercising first!`);
        return;
    }
    
    // Update progress page title
    if (elements.progressPageTitle) {
        elements.progressPageTitle.textContent = `${userName}'s Progress`;
    }
    
    // Update stats
    if (elements.totalWorkouts) elements.totalWorkouts.textContent = userData.totalWorkouts;
    if (elements.userTotalSets) elements.userTotalSets.textContent = userData.totalSets;
    
    // Calculate average rest time
    let totalRestTime = 0;
    let restCount = 0;
    userData.workouts.forEach(workout => {
        Object.values(workout.exercises || {}).forEach(exercise => {
            exercise.sets.forEach(set => {
                if (set.restTime) {
                    totalRestTime += set.restTime;
                    restCount++;
                }
            });
        });
    });
    
    const avgRestTime = restCount > 0 ? (totalRestTime / restCount / 1000).toFixed(1) : 0;
    if (elements.avgRestTime) elements.avgRestTime.textContent = `${avgRestTime}s`;
    
    // Display detailed workouts
    displayDetailedWorkouts(userData.workouts);
    
    showPage('progress');
}

function displayDetailedWorkouts(workouts) {
    if (!elements.workoutDetailsContainer) return;
    
    elements.workoutDetailsContainer.innerHTML = '';
    
    workouts.slice(-10).reverse().forEach(workout => {
        const workoutCard = document.createElement('div');
        workoutCard.className = 'user-data-card';
        
        workoutCard.innerHTML = `
            <h4>${capitalize(workout.day)} - ${workout.date}</h4>
            <div class="user-stat">
                <span>Total Time:</span>
                <span>${(workout.totalTime / 60000).toFixed(1)} minutes</span>
            </div>
            <div class="user-stat">
                <span>Exercises:</span>
                <span>${workout.totalExercises}</span>
            </div>
            <div class="user-stat">
                <span>Sets Completed:</span>
                <span>${workout.totalSets}</span>
            </div>
            <div class="exercise-breakdown">
                <strong>Exercise Breakdown:</strong>
                ${Object.values(workout.exercises || {}).map(ex => `
                    <div style="margin-left: 1rem; margin-top: 0.5rem;">
                        <strong>${ex.name}:</strong> ${ex.sets.length} sets
                        ${ex.sets.map(set => `
                            <div style="margin-left: 1rem; font-size: 0.9rem; color: #ccc;">
                                Set ${set.setNumber}: ${(set.completionTime / 1000).toFixed(1)}s
                                ${set.restTime ? ` (Rest: ${(set.restTime / 1000).toFixed(1)}s)` : ''}
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `;
        
        elements.workoutDetailsContainer.appendChild(workoutCard);
    });
}

// Admin Dashboard
function showAdminDashboard() {
    // Update admin stats
    const totalUsers = Object.keys(userAnalytics).length;
    const totalWorkouts = workoutProgress.length;
    const totalSets = Object.values(userAnalytics).reduce((sum, user) => sum + user.totalSets, 0);
    const avgWorkoutTime = workoutProgress.length > 0 ? 
        workoutProgress.reduce((sum, w) => sum + (w.totalTime || 0), 0) / workoutProgress.length / 60000 : 0;
    
    if (elements.adminTotalUsers) elements.adminTotalUsers.textContent = totalUsers;
    if (elements.adminTotalWorkouts) elements.adminTotalWorkouts.textContent = totalWorkouts;
    if (elements.adminTotalSets) elements.adminTotalSets.textContent = totalSets;
    if (elements.adminAvgTime) elements.adminAvgTime.textContent = `${avgWorkoutTime.toFixed(1)}m`;
    
    // Display all users data
    displayAllUsersData();
    
    showPage('admin');
}

function displayAllUsersData() {
    if (!elements.allUsersData) return;
    
    elements.allUsersData.innerHTML = '';
    
    Object.entries(userAnalytics).forEach(([userName, userData]) => {
        const userCard = document.createElement('div');
        userCard.className = 'user-data-card';
        
        // Calculate user's average rest time
        let totalRestTime = 0;
        let restCount = 0;
        userData.workouts.forEach(workout => {
            Object.values(workout.exercises || {}).forEach(exercise => {
                exercise.sets.forEach(set => {
                    if (set.restTime) {
                        totalRestTime += set.restTime;
                        restCount++;
                    }
                });
            });
        });
        
        const avgRestTime = restCount > 0 ? (totalRestTime / restCount / 1000).toFixed(1) : 0;
        const avgWorkoutTime = userData.totalWorkouts > 0 ? (userData.totalTime / userData.totalWorkouts / 60000).toFixed(1) : 0;
        
        userCard.innerHTML = `
            <h4>👤 ${userName}</h4>
            <div class="user-stat">
                <span>Total Workouts:</span>
                <span>${userData.totalWorkouts}</span>
            </div>
            <div class="user-stat">
                <span>Total Sets:</span>
                <span>${userData.totalSets}</span>
            </div>
            <div class="user-stat">
                <span>Total Time:</span>
                <span>${(userData.totalTime / 60000).toFixed(1)} minutes</span>
            </div>
            <div class="user-stat">
                <span>Avg Workout Time:</span>
                <span>${avgWorkoutTime} minutes</span>
            </div>
            <div class="user-stat">
                <span>Avg Rest Time:</span>
                <span>${avgRestTime}s</span>
            </div>
            <div class="user-stat">
                <span>Last Workout:</span>
                <span>${userData.lastWorkout || 'Never'}</span>
            </div>
        `;
        
        elements.allUsersData.appendChild(userCard);
    });
    
    if (Object.keys(userAnalytics).length === 0) {
        elements.allUsersData.innerHTML = '<p style="text-align: center; opacity: 0.7;">No users have completed workouts yet.</p>';
    }
}

function updateProgressStats() {
    const totalWorkouts = workoutProgress.length;
    elements.totalWorkouts.textContent = totalWorkouts;

    // Calculate current streak (simplified)
    let streak = 0;
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    const recentWorkouts = workoutProgress.slice(-7);
    if (recentWorkouts.some(w => new Date(w.date).toDateString() === today)) {
        streak = 1;
    } else if (recentWorkouts.some(w => new Date(w.date).toDateString() === yesterday)) {
        streak = 1;
    }
    
    elements.currentStreak.textContent = `${streak} day${streak !== 1 ? 's' : ''}`;

    // Display recent workouts
    elements.workoutHistory.innerHTML = '';
    const recentWorkoutsList = workoutProgress.slice(-5).reverse();
    
    if (recentWorkoutsList.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No workouts completed yet. Start your first workout!';
        elements.workoutHistory.appendChild(li);
    } else {
        recentWorkoutsList.forEach(workout => {
            const li = document.createElement('li');
            li.textContent = `${workout.date} - ${capitalize(workout.day)} (${workout.completedSets}/${workout.totalSets} sets)`;
            elements.workoutHistory.appendChild(li);
        });
    }
}

// Event listeners
elements.startExerciseBtn.addEventListener('click', () => showPage('input'));
elements.checkProgressBtn.addEventListener('click', showProgressModal);

// Navigation listeners
elements.backHome.addEventListener('click', () => showPage('home'));
elements.backToInput.addEventListener('click', () => showPage('input'));
elements.backToWorkout.addEventListener('click', () => showPage('workout'));
elements.backHomeProgress.addEventListener('click', () => showPage('home'));
if (elements.backHomeAdmin) {
    elements.backHomeAdmin.addEventListener('click', () => showPage('home'));
}

// Modal listeners
if (elements.closeModal) {
    elements.closeModal.addEventListener('click', hideProgressModal);
}
if (elements.cancelProgress) {
    elements.cancelProgress.addEventListener('click', hideProgressModal);
}
if (elements.progressNameForm) {
    elements.progressNameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = elements.progressNameInput.value.trim();
        if (userName) {
            hideProgressModal();
            handleProgressRequest(userName);
        }
    });
}

// Close modal on background click
if (elements.progressNameModal) {
    elements.progressNameModal.addEventListener('click', (e) => {
        if (e.target === elements.progressNameModal) {
            hideProgressModal();
        }
    });
}

// Form submission
elements.workoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentUser = elements.userNameInput.value.trim();
    currentDay = elements.workoutDaySelect.value;

    if (currentUser && currentDay) {
        displayWorkout();
    }
});

// Exercise page listeners
if (elements.completeSet) {
    elements.completeSet.addEventListener('click', completeCurrentSet);
}
if (elements.prevExercise) {
    elements.prevExercise.addEventListener('click', previousExercise);
}
if (elements.nextExercise) {
    elements.nextExercise.addEventListener('click', nextExercise);
}

// Timer listeners
if (elements.extendTimer) {
    elements.extendTimer.addEventListener('click', extendTimer);
}
if (elements.skipTimer) {
    elements.skipTimer.addEventListener('click', skipTimer);
}
if (elements.reduceTimer) {
    elements.reduceTimer.addEventListener('click', reduceTimer);
}

// Legacy workout page listeners
elements.completeWorkout.addEventListener('click', completeWorkout);
elements.newWorkout.addEventListener('click', () => {
    elements.userNameInput.value = '';
    elements.workoutDaySelect.value = '';
    showPage('input');
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    updateHomeStats();
    
    // Set today's day as default
    const today = new Date().toLocaleLowerCase();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayName = days[new Date().getDay()];
    
    if (elements.workoutDaySelect) {
        elements.workoutDaySelect.value = todayName;
    }
});

// Add some animations and interactions
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Prevent form submission on Enter key in input fields (except submit buttons)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON' && e.target.type !== 'submit') {
        e.preventDefault();
    }
});