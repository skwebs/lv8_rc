<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //
    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|max:191|unique:users',
            'password' => 'required|min:8',
            'confirmPassword' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'error' => true,
                'validation_errors' => $validator->errors(),
            ]);
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            // $token = auth()->login($users);
            // $user->createToken($user->email."_Token")->plainTextToken;
            return response()->json([
                'error' => false,
                'status' => 200,
                'username' => $user->email,
                'token' => $user->createToken($user->email . "_Token")->plainTextToken,
                'message' => 'User registered successfully',
            ], 200);
        }
    }
}
